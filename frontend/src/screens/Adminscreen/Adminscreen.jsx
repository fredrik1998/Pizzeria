import React, { useEffect, useState } from 'react'
import GlobalStyle from '../../GlobalStyles'
import Header from '../../components/Header/Header'
import axios from 'axios'
import {Table, TableCell, TableBody, TableRow, TableHead, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import {tableCellClasses} from '@mui/material'
import AddPizzaModal from '../../components/AddPizzaModal/AddPizzaModal'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Adminscreen = () => {
  const [menuData, setMenuData] = useState([])
  const [ordersData, setOrdersData] = useState([])

  useEffect(() => {
    axios.get('/api/menu')
    .then(response => {
      const menuData = response.data.menu
      setMenuData(menuData)
    }).catch(console.error)
  }, [])

  useEffect(() => {
    axios.get('/api/orders')
    .then(response => {
      const ordersData = response.data
      setOrdersData(ordersData)
    }).catch(console.error)
  }, [])

  const handleDeletePizza = async (pizzaId) => {
    try {
      const response = await axios.delete(`/api/menu/delete/${pizzaId}`);
      console.log(response.data);
   
      setMenuData(menuData.filter((menu) => menu.id !== pizzaId));
    } catch (error) {
      console.error(error);
    }
  };

  const addNewPizza = (newPizza) => {
    setMenuData((prevMenuData) => [...prevMenuData, newPizza]);
  };
  
  return (
    <>

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
  <Button
    variant="contained"
    color="secondary"
    onClick={() => handleDeletePizza(menu.id)}
  >
    Delete
  </Button>
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
                <StyledTableCell key={item.id}>{item.name} {item.quantity} X ${item.price} =   ${item.price * item.quantity}</StyledTableCell>
              ))}
              <StyledTableCell>${data.total_price}</StyledTableCell>
            </StyledTableRow>
          )
        })}
      </TableBody>
    </Table>

    </>
  )
}

export default Adminscreen

