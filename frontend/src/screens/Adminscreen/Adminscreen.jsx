import React, { Fragment, useEffect, useState } from 'react'
import GlobalStyle from '../../GlobalStyles'
import Header from '../../components/Header/Header'
import axios from 'axios'
import {Table, TableCell, TableBody, TableRow, TableHead, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import {tableCellClasses} from '@mui/material'
import AddPizzaModal from '../../components/AddPizzaModal/AddPizzaModal'
import { useNavigate } from 'react-router-dom'
import { StyledWrapper, StyledButton } from './AdminElements'
import {FaTrash } from 'react-icons/fa'
import UpdatePizzaModal from '../../components/UpdatePizzaModal/UpdatePizzaModal'
import Layout from '../../components/Layout'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
    fontFamily: 'League Spartan',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: 'League Spartan',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Adminscreen = () => {
  const [menuData, setMenuData] = useState([])
  const [ordersData, setOrdersData] = useState([])
 
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      navigate('/login');
    } else {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const [menuResponse, ordersResponse] = await Promise.all([
        axios.get('/api/menu'),
        axios.get('/api/orders')
      ]);
      setMenuData(menuResponse.data.menu);
      setOrdersData(ordersResponse.data);
    };
  
    fetchData().catch((error) => console.error('Error fetching data:', error));
  }, []);
  

  const handleDeletePizza = async (pizzaId) => {
    try {
      const response = await axios.delete(`/api/menu/delete/${pizzaId}`);
      console.log(response.data);
   
      setMenuData(menuData.filter((menu) => menu.id !== pizzaId));
    } catch (error) {
      console.error(error);
    }
  };

  const updatePizza = (updatedPizza) => {
    setMenuData(
      menuData.map((menu) => (
        menu.id === updatedPizza.id ? updatedPizza : menu
      ))
    )
  }

  const addNewPizza = (newPizza) => {
    setMenuData((prevMenuData) => [...prevMenuData, newPizza]);
  };

  return (
    <StyledWrapper>
      <Layout>
    <Header/>
    <h1>Pizzas</h1>
    <AddPizzaModal addNewPizza={addNewPizza}>Add Pizza</AddPizzaModal>
    <Table>
      <TableHead>
        <StyledTableRow>
          <StyledTableCell>ID</StyledTableCell>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell>Price</StyledTableCell>
          <StyledTableCell>Size</StyledTableCell>
          <StyledTableCell>Toppings</StyledTableCell>
          <StyledTableCell>Description</StyledTableCell>
          <StyledTableCell>Stock</StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {menuData.map((menu) => {
          return(
            <StyledTableRow key={menu.id}>
              <StyledTableCell>{menu.id}</StyledTableCell>
              <StyledTableCell>{menu.name}</StyledTableCell>
              <StyledTableCell>${menu.price}</StyledTableCell>
              <StyledTableCell>{menu.size}</StyledTableCell>
              <StyledTableCell>{menu.toppings}</StyledTableCell>
              <StyledTableCell>{menu.description}</StyledTableCell>
              <StyledTableCell>{menu.countInStock}</StyledTableCell>
              <StyledTableCell>
  <StyledButton
    
    onClick={() => handleDeletePizza(menu.id)}
  >
    <FaTrash/>
  </StyledButton>
</StyledTableCell>
<StyledTableCell>
  <UpdatePizzaModal
    updatePizza={updatePizza}
    pizzaToUpdate={menu}
  />
</StyledTableCell>
            </StyledTableRow>       
)})}
      </TableBody>
    </Table>
    <h2>Orders</h2>
    <Table>
      <TableHead>
        <StyledTableRow>
          <StyledTableCell>ID</StyledTableCell>
          <StyledTableCell>Customer Name</StyledTableCell>
          <StyledTableCell>Customer Email</StyledTableCell>
          <StyledTableCell>Customer Phone</StyledTableCell>
          <StyledTableCell>Items</StyledTableCell>
          <StyledTableCell>Total Price</StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {ordersData.map((data) => {
          return(
            <StyledTableRow key={data.id}>
              <StyledTableCell>{data.id}</StyledTableCell>
              <StyledTableCell>{data.customer_name}</StyledTableCell>
              <StyledTableCell>{data.customer_email}</StyledTableCell>
              <StyledTableCell>{data.customer_phone}</StyledTableCell>
              {Array.isArray(data.items) && data.items.map((item) => (
                <div>
                <StyledTableCell key={item.id}>{item.name} {item.quantity}x</StyledTableCell>
                </div>
              ))}
              <StyledTableCell>${data.total_price}</StyledTableCell>
            </StyledTableRow>
          )
        })}
      </TableBody>
    </Table>
    </Layout>
    </StyledWrapper>
  )
}

export default Adminscreen

