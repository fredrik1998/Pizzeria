import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import GlobalStyle from "../../GlobalStyles";
import Loader from "../../components/Loader/Loader";
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
  StyledToppingsContainer,
  StyledToppingsDiv,
  StyledItems,
} from "./SuccessElements";

const Success = () => {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState({ items: [] });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get(`/api/order/${orderId}`, { cancelToken: cancelToken.token })
      .then((response) => {
        console.log("Response:", response);
        setOrderDetails(response.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Request Cancelled");
        }
      });

    return () => {
      cancelToken.cancel();
    };
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
              {Array.isArray(orderDetails.items) &&
                orderDetails.items.map((item) => (
                  <StyledLi key={item.id}>
                    <StyledItems>
                      <StyledImg src={item.image}></StyledImg>
                      {item.name} {item.quantity} X ${item.price} = $
                      {item.price * item.quantity}
                    </StyledItems>
                    {item.selectedToppings &&
                      item.selectedToppings.length > 0 && (
                        <StyledToppingsDiv>
                          <StyledH4>Toppings:</StyledH4>
                          {item.selectedToppings.map((topping, index) => (
                            <StyledToppingsContainer key={index}>
                              {topping} $2
                            </StyledToppingsContainer>
                          ))}
                        </StyledToppingsDiv>
                      )}
                  </StyledLi>
                ))}
            </StyledUl>
            <StyledTotal>Total: ${orderDetails.total_price}</StyledTotal>
          </StyledTextContainer>
        ) : (
          <Loader />
        )}
      </StyledContainer>
    </>
  );
};

export default Success;
