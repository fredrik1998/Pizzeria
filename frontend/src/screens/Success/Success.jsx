import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import GlobalStyle from '../../GlobalStyles';
import { 
  StyledContainer,
  StyledText,
  StyledLi,
  StyledTextContainer,
  StyledH2,
  StyledH3,
  StyledH1,
  StyledUl,
  StyledLink,
  StyledTotal,
  StyledImg
 } from './SuccessElements'
const Success = () => {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState({ items: [] });

  useEffect(() => {
    axios
      .get(`/api/order/${orderId}`)
      .then((response) => {
        console.log('Response:', response);
        setOrderDetails(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [orderId]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledContainer>
        <StyledH1>Thank you for your order!</StyledH1>
        <StyledLink to='/'>Back to homepage</StyledLink>
        <StyledText>Your pizzas will be with you shortly!</StyledText>
        <StyledH2>Order Details</StyledH2>
        {orderDetails.id ? (
          <StyledTextContainer>
            <StyledText>Order ID: {orderDetails.id}</StyledText>
            <StyledText>Name: {orderDetails.customer_name}</StyledText>
            <StyledText>Email: {orderDetails.customer_email}</StyledText>
            <StyledText>Phone: {orderDetails.customer_phone}</StyledText>
            <StyledH3>Items:</StyledH3>
            <StyledUl>
              {Array.isArray(orderDetails.items) && orderDetails.items.map((item) => (
                <StyledLi key={item.id}>
                <StyledImg src={item.image_path} /> {item.name} {item.quantity} X ${item.price} =   ${item.price * item.quantity}
                </StyledLi>
              ))}
            </StyledUl>
            <StyledTotal>Total: ${orderDetails.total_price}</StyledTotal>
          </StyledTextContainer>
        ) : (
          <p>Loading order details...</p>
        )}
      </StyledContainer>
    </>
  );
};

export default Success;
