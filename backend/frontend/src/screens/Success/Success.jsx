import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import GlobalStyle from '../../GlobalStyles';
import Loader from '../../components/Loader/Loader';
import { 
  StyledContainer,
  StyledText,
  StyledLi,
  StyledTextContainer,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH1,
  StyledUl,
  StyledTotal,
  StyledImg,
  StyledToppingsContainer
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
      {item.name} {item.quantity} X ${item.price} = ${item.price * item.quantity}
      {item.selectedToppings && item.selectedToppings.length > 0 && (
        <div>
          <StyledH4>Toppings:</StyledH4>
          {item.selectedToppings.map((topping, index) => (
            <StyledToppingsContainer key={index}>{topping}  $2</StyledToppingsContainer>
          ))}
        </div>
      )}
    </StyledLi>
  ))}
</StyledUl>

            <StyledTotal>Total: ${orderDetails.total_price}</StyledTotal>
          </StyledTextContainer>
        ) : (
          <Loader/>
        )}
      </StyledContainer>
    </>
  );
};

export default Success;
