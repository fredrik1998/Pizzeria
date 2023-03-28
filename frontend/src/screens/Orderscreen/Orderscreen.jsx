import React, { useEffect, useState, useContext } from 'react';
import Stripe from 'stripe'
import { CartContext } from '../../CartContext';
import { loadStripe } from '@stripe/stripe-js'
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import GlobalStyle from '../../GlobalStyles';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import axios from 'axios';
import Header from '../../components/Header/Header';
import { Grid } from "@mui/material";
import {
  StyledContainer,
  StyledItemContainer,
  StyledH1,
  StyledImage,
  StyledPrice,
  StyledButton,
  StyledTextButtonContainer,
  StyledTextContainer,
  StyledCartContainer,
  StyledCartItem,
  StyledTotal,
  StyledCheckoutButton,
  StyledButtonContainer,
  CartButton,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledCartButton,
  ErrorMessage,
} from './OrderscreenElements';

import { FaPlus, FaMinus  } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
const appearance = {
  theme: 'flat'
};
const stripePromise = loadStripe('pk_test_51MbkNeGJ8v9b2yrMsOEfEwwuEkzRpZOrJ2A5Wkdti8WqCdwI7b0BXIFGAwX888Qpd6K8fZG07igiitpOGOEE52Ns00Aj9fGYtL')
const Orderscreen = () => {
  const [orderItems, setOrderItems] = useState([]);
  const { cartItems, setCartItems } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true)
  const [isDisabled, setisDisabled] = useState(true)
  const [orderId, setOrderId] = useState(null);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const navigate = useNavigate()
  
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
  })

 
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      if (existingItem.quantity < item.countInStock) {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
          )
        );
      } else {
        console.log('Cannot add more items. Maximum stock reached.');
      }
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  

  const removeFromCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      if (existingItem.quantity > 1) {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
          )
        );
      } else {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
      }
    }
  };
  
  
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);
  };
  

  const handleCheckout = () => {
    setShowCheckoutForm(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const payload = {
      customer_name: customerInfo.name,
      customer_email: customerInfo.email,
      customer_phone: customerInfo.phone,
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image_path,
      })),
      total_price: calculateTotal(),
    };

    const errors = {}

    if(!customerInfo.name){
      errors.name = 'Name is required'
    }
    if(!customerInfo.email){
      errors.email = 'Email is required'
    } else {
      const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if(!emailPattern.test(customerInfo.email)){
        errors.email = "Please enter a valid email address"
      }
    }
    if(!customerInfo.phone){
      errors.phone = 'Phone is required'
    } else {
      const isNumber = /^\d+$/
      if(!isNumber.test(customerInfo.phone)){
        errors.phone = "Please only enter digits"
      }
    }

    setFormErrors(errors)
    if(Object.keys(errors).length === 0){

      axios.post('/api/order/add', payload)
      .then((response) => {
        console.log('Full Response:', response); // Log the entire response
        const { orderId } = response.data;
        setOrderId(orderId);
        console.log('OrderId:', orderId);
      })
      .catch((error) => {
        console.error(error);
      });
    
    
        setCartItems([]);
        setShowCheckoutForm(false);
        setCustomerInfo({
          name: '',
          email: '',
          phone: '',
        });
        setShowPaymentForm(true);
      };
    }

  useEffect(() => {
    axios
      .get('api/menu')
      .then((response) => {
        setOrderItems(response.data.menu);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    let cancelToken = axios.CancelToken.source();
  
    const fetchClientSecret = async () => {
      try {
        const { data } = await axios.post(
          '/api/create_payment',
          { cancelToken: cancelToken.token }
        );
        const { client_secret } = data;
        console.log(client_secret);
        setClientSecret(client_secret);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          throw error;
        }
      }
    };
  
    fetchClientSecret();
  
    return () => {
      cancelToken.cancel('Component unmounted');
    };
  }, []);

  useEffect(() => {
    setisDisabled(Object.keys(formErrors).length > 0)
  }, [formErrors])

  return (
    <>
      <GlobalStyle />
      <Header />
      {isLoading ? (
        <Loader/>
      ) : (
        <StyledContainer>
        {orderItems.map((item) => {
  return (
    <StyledItemContainer key={item.id}>
      <StyledImage src={item.image_path} />
      <StyledTextContainer>
        <StyledH1>{item.name}</StyledH1>
        <StyledPrice>${item.price}</StyledPrice>
        {item.countInStock <= 0 && <p>Out of Stock</p>}
      </StyledTextContainer>
      <StyledTextButtonContainer>
        <StyledButton disabled={item.countInStock <= 0} onClick={() => addToCart(item)}>Add to cart</StyledButton>
      </StyledTextButtonContainer>
    </StyledItemContainer>
  );
})}

        <StyledCartContainer>
          {cartItems && cartItems.length > 0 && (
            <StyledH1>Cart Checkout</StyledH1>
          )}
          {cartItems.map((cartItem) => {
  const menuItem = orderItems.find((orderItem) => orderItem.id === cartItem.id);

  return (
    <StyledCartItem key={cartItem.id}>
       <StyledButtonContainer>
       <StyledH1>
        {cartItem.quantity}x {cartItem.name}
      </StyledH1>
      <CartButton
          onClick={() => removeFromCart(cartItem)}
          disabled={cartItem.quantity <= 0}
        >
          <FaMinus />
        </CartButton>
        <CartButton
          onClick={() => addToCart(cartItem)}
          disabled={cartItem.quantity >= menuItem.countInStock}
        >
          <FaPlus />
        </CartButton>
      </StyledButtonContainer>
      <p>${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
     
    </StyledCartItem>
  );
})}


{cartItems && cartItems.length > 0 && (
  <>
    <StyledTotal>Total: ${calculateTotal().toFixed(2)}</StyledTotal>
    {!showCheckoutForm && (
      <StyledCheckoutButton onClick={handleCheckout}>
        Checkout
      </StyledCheckoutButton>
    )}
  </>
)}
          {showCheckoutForm && (
            <>
            <StyledForm noValidate onSubmit={handleFormSubmit}>
              <h2>Enter your information</h2>
              <StyledLabel>Name</StyledLabel>
                <StyledInput
                  type="text"
                  value={ customerInfo.name}
                  onChange={(event) =>
                    setCustomerInfo({ ...customerInfo, name: event.target.value })
                  }
                />
                <ErrorMessage>{formErrors.name}</ErrorMessage>
        
          <StyledLabel>Email</StyledLabel>
            <StyledInput
              type="email"
              value={customerInfo.email}
              onChange={(event) =>
                setCustomerInfo({ ...customerInfo, email: event.target.value })
              }
  
            />
            <ErrorMessage>{formErrors.email}</ErrorMessage>
          <StyledLabel>Phone</StyledLabel>
            <StyledInput
              type="tel"
              value={customerInfo.phone}
              onChange={(event) =>
                setCustomerInfo({ ...customerInfo, phone: event.target.value })
              }
           
            />
            <ErrorMessage>{formErrors.phone}</ErrorMessage>
          
          <StyledCartButton type="submit">Submit</StyledCartButton>
          
        </StyledForm>
  </>
      )}
      {showPaymentForm && stripePromise && clientSecret && (
  <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
    <CheckoutForm orderId={orderId} />
  </Elements>
)}

    </StyledCartContainer>
  </StyledContainer>

      )}
      
</>
  );
};

export default Orderscreen;
