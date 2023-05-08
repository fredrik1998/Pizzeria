import React, { Fragment, useEffect, useState } from 'react'
import GlobalStyle from '../../GlobalStyles'
import Header from '../../components/Header/Header'
import axios from 'axios'
import {Table, TableCell, TableBody, TableRow, TableHead } from '@mui/material'
import { styled } from '@mui/material/styles';
import {tableCellClasses} from '@mui/material'
import {useNavigate, useParams } from 'react-router-dom'
import { StyledWrapper, StyledH1, StyledLink } from './UserscreenElements'
import Layout from '../../components/Layout'
import Loader from '../../components/Loader/Loader'

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
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '10px 6px',
      width: '100%',
      '&:before': {
        position: 'absolute',
        top: 6,
        left: 6,
        width: '45%',
        paddingRight: 10,
        whiteSpace: 'nowrap',
        content: 'attr(data-label)',
        fontWeight: 'bold',
      },
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
      marginBottom: '0.625em',
      '&:last-child td': {
        borderBottom: '0',
      },
      '& td': {
        borderBottom: '1px solid #eee',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
      },
      '& td:before': {
        content: 'attr(data-label)',
        fontWeight: 'bold',
        left: 0,
        position: 'absolute',
        top: '-0.75em',
      },
    },
  }));

const Userscreen = () => {
    const [ordersData, setOrdersData] = useState([])
    const navigate = useNavigate()
    const {userId} = useParams()
    const [Loading, setLoading] = useState(true)
    console.log("User ID:", userId);

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if(!token){
            navigate('/login')
        } else {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }, [])
    
    useEffect(() => {
      const source = axios.CancelToken.source();
    
      const fetchData = async () => {
        try {
          const ordersResponse = await axios.get(`/api/orders/user/${userId}`, {
            cancelToken: source.token
          });
          setOrdersData(ordersResponse.data);
          setLoading(false);
          console.log(ordersData);
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log('Request is cancelled');
          } else {
            console.log(error);
          }
        }
      };

      fetchData();
    
      return () => {
        source.cancel('Request cancelled');
      };
    }, [userId]);
    
  
  return (
    <StyledWrapper>
        <Layout>
          <GlobalStyle/>
            <Header/>
            {Loading ? (
              <Loader/>
            ) : (
              <>
              <StyledH1>Your Orders</StyledH1>
            <Table>
                <TableHead>
                    <StyledTableRow>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell>Phone</StyledTableCell>
                    <StyledTableCell>Items</StyledTableCell>
                    <StyledTableCell>Total Price</StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
            
                {ordersData.length === 0 ? (
                  
        <StyledTableCell colSpan={6}>You haven't placed any orders yet.<StyledLink to="/order">Order here!</StyledLink></StyledTableCell>
   
) : (
    <>
                {ordersData.map((data) => {
                    return (
                        <StyledTableRow key={data.id}>
                            <StyledTableCell>{data.id}</StyledTableCell>
                            <StyledTableCell>{data.customer_name}</StyledTableCell>
                            <StyledTableCell>{data.customer_email}</StyledTableCell>
                            <StyledTableCell>{data.customer_phone}</StyledTableCell>
                            {Array.isArray(data.items) && data.items.map((item) => (
                                <div key={item.id}>
                                    <StyledTableCell>
                                        {item.name} {item.quantity}x
                                        {item.selectedToppings && Array.isArray(item.selectedToppings) && item.selectedToppings.length > 0 ? (
                                            <div>Toppings: {item.selectedToppings.join(', ')}</div>
                                        ) : null}
                                    </StyledTableCell>
                                </div>
                            ))}
                            <StyledTableCell>${data.total_price}</StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                        </StyledTableRow>
                     )
                    })}
                    </>
)}
                </TableBody>
            </Table>
            </>
            )}
            </Layout>
        </StyledWrapper>
)}

            
 

export default Userscreen