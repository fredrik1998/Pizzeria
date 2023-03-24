import React, { useEffect, useState } from 'react';
import GlobalStyle from '../../GlobalStyles';
import axios from 'axios';
import Header from '../../components/Header/Header';
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

} from './OrderscreenElements';

import { FaPlus, FaMinus  } from 'react-icons/fa'

const Orderscreen = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get('api/menu')
      .then((response) => {
        const orderItemsData = response.data.menu.map((item, index) => ({
          ...item,
          id: index,
        }));
        setOrderItems(orderItemsData);
      })
      .catch((error) => console.error(error));
  }, []);
  

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
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
    const payload = {
      items: cartItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
    };
  
    axios.post('/api/order/add', payload)
      .then((response) => {
        // TODO: handle successful order creation
      })
      .catch((error) => {
        console.error(error);
        // TODO: handle error
      });
  };
  

  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledContainer>
        {orderItems.map((item) => {
            
          return (
            <StyledItemContainer key={item.id}>
              <StyledImage src={item.image_path} />
              <StyledTextContainer>
                <StyledH1>{item.name}</StyledH1>
                <StyledPrice>${item.price}</StyledPrice>
              </StyledTextContainer>
              <StyledTextButtonContainer>
                <StyledButton onClick={() => addToCart(item)}>Add to cart</StyledButton>
              </StyledTextButtonContainer>
            </StyledItemContainer>
          );
        })}
        <StyledCartContainer>
          <StyledH1>Cart Checkout</StyledH1>
          {cartItems.map((cartItem) => {
  const menuItem = orderItems.find((orderItem) => orderItem.id === cartItem.id);

  return (
    <StyledCartItem key={cartItem.id}>
      <StyledH1>
        {cartItem.quantity}x {cartItem.name}
      </StyledH1>
      <p>${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
      <StyledButtonContainer>
        <CartButton
          onClick={() => addToCart(cartItem)}
          disabled={cartItem.quantity >= menuItem.countInStock}
        >
          <FaPlus />
        </CartButton>
        <CartButton
          onClick={() => removeFromCart(cartItem)}
          disabled={cartItem.quantity <= 0}
        >
          <FaMinus />
        </CartButton>
      </StyledButtonContainer>
    </StyledCartItem>
  );
})}


          <StyledTotal>Total: ${calculateTotal().toFixed(2)}</StyledTotal>
          <StyledCheckoutButton onClick={handleCheckout}>Checkout</StyledCheckoutButton>
        </StyledCartContainer>
      </StyledContainer>
    </>
  );
};

export default Orderscreen;
