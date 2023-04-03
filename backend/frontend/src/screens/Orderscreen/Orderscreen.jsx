import React, { useEffect, useState, useContext} from 'react';
import { UserContext } from '../../UserContext';
import Stripe from 'stripe'
import { CartContext } from '../../CartContext';
import { loadStripe } from '@stripe/stripe-js'
import { Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import GlobalStyle from '../../GlobalStyles';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import axios from 'axios';
import Header from '../../components/Header/Header';
import { Grid, Accordion, AccordionSummary } from "@mui/material";
import {FaArrowDown} from 'react-icons/fa'
import {
  StyledContainer,
  StyledItemContainer,
  StyledH1,
  StyledH2,
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
  StyledGridContainer,
  StyledBox,
  StyledBoxInput,
  CheckmarkImage,
  StyledH5,
  StyledText,
  StyledToppingsContainer
} from './OrderscreenElements';

import { FaPlus, FaMinus  } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import checkmark from '../../assets/icon-checkmark.svg'
import Layout from '../../components/Layout';
const appearance = {
  theme: 'flat'
};
const stripePromise = loadStripe('pk_test_51MbkNeGJ8v9b2yrMsOEfEwwuEkzRpZOrJ2A5Wkdti8WqCdwI7b0BXIFGAwX888Qpd6K8fZG07igiitpOGOEE52Ns00Aj9fGYtL')
const Orderscreen = () => {
  const {user} = useContext(UserContext);
  const [orderItems, setOrderItems] = useState([]);
  const { cartItems, setCartItems } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setisDisabled] = useState(true);
  const [orderId, setOrderId] = useState(null);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [openAccordion, setOpenAccordion] = useState(null);
  const [uniqueId, setUniqueId] = useState('');
  const [tempToppings, setTempToppings] = useState({});
  const [message, setMessage] = useState('');

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

  let uniqueIdCounter = 0;

const generateUniqueId = () => {
  uniqueIdCounter += 1;
  return `item-${uniqueIdCounter}`;
};

const stringifyAndSortToppings = (toppings) => {
  return JSON.stringify(toppings.slice().sort());
};

const addToCart = (item) => {
  const existingItemsWithSameId = cartItems.filter((cartItem) => cartItem.id === item.id && stringifyAndSortToppings(cartItem.toppings) === stringifyAndSortToppings(item.toppings));
  const totalQuantityWithSameId = existingItemsWithSameId.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

  if (totalQuantityWithSameId < item.countInStock) {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id && stringifyAndSortToppings(cartItem.toppings) === stringifyAndSortToppings(item.toppings));

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity + 1,
      };
      setCartItems(updatedCartItems);
      setOpenAccordion(null)
    } else {
      setCartItems([...cartItems, { ...item, uniqueId: generateUniqueId(), quantity: 1 }]);
      setOpenAccordion(null)
    }
  } else {
    setMessage("You have reached the maximum available stock for this pizza.");
  }
};

const removeFromCart = (item) => {
  const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id && stringifyAndSortToppings(cartItem.toppings) === stringifyAndSortToppings(item.toppings));

  if (existingItemIndex !== -1) {
    const updatedCartItems = [...cartItems];

    if (cartItems[existingItemIndex].quantity > 1) {
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity - 1,
      };
    } else {
      updatedCartItems.splice(existingItemIndex, 1);
    }

    setCartItems(updatedCartItems);
  }
};

  const handleCheckout = () => {
    setShowCheckoutForm(true);
  };

  const extraToppings = {
    'Mozarella': {
      price: 2,  
    },
    'Breasola': {
      price: 2,
    },
    'Burrata': {
      price: 2,
    },
    'Mussels': {
      price: 2,
    },
    'Artichokes': {
      price: 2,
    },
    'Salami': {
      price: 2,
    },
  };

  const handleAddOnsEvent = (topping, itemId, uniqueId) => {
    const currentToppings = tempToppings[uniqueId] || [];
    const updatedToppings = currentToppings.includes(topping)
      ? currentToppings.filter((t) => t !== topping)
      : [...currentToppings, topping];
    setTempToppings({ ...tempToppings, [uniqueId]: updatedToppings });
  };
  
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => {
      const itemPrice = parseFloat(item.price) * item.quantity;
      const toppingsPrice = item.toppings.reduce((total, topping) => {
        return total + extraToppings[topping].price;
      }, 0) * item.quantity;
      return acc + itemPrice + toppingsPrice;
    }, 0);
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    const userId = localStorage.getItem('userId');
    const guestId = localStorage.getItem('guestId');
    const payload = {
      customer_name: customerInfo.name,
      customer_email: customerInfo.email,
      customer_phone: customerInfo.phone,
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        selectedToppings: item.toppings,
        image: item.image_path,
      })),
      total_price: calculateTotal(),
      userId: userId || '',
      guestId: guestId || '',
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
      axios.post('/api/order/add', payload, {
        headers: {'Content-Type': 'application/json'}
      })
      .then((response) => {
        console.log('Full Response:', response);
        const { orderId } = response.data;
        setOrderId(orderId);
        console.log('OrderId:', orderId);
      })
      .catch((error) => {
        console.error(error);
      });
      fetchClientSecret()
      setCartItems([]);
      setShowCheckoutForm(false);
      setCustomerInfo({
        name: '',
        email: '',
        phone: '',
      });
      setShowPaymentForm(true);
    }
  };
  

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

  const fetchClientSecret = async () => {
    try {
      const { data } = await axios.post('/api/create_payment', {
        total_price: calculateTotal(),
      }, {
        headers: {'Content-Type' : 'application/json'}
      })
      const { client_secret } = data;
      console.log(client_secret);
      setClientSecret(client_secret);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setisDisabled(Object.keys(formErrors).length > 0);
    if (cartItems.length === 0) {
      setShowCheckoutForm(false);
    }
    if (showPaymentForm) {
      setOpenAccordion(false);
    }
    if (!openAccordion) {
      setTempToppings({});
    }
   
  }, [formErrors, cartItems, openAccordion]);

  useEffect(() => {
    if (cartItems.length > 0) {
      if (window.innerWidth <= 898) {
        window.scrollTo({
          top: document.querySelector("#cart-checkout").offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [cartItems])
  

  return (
    <>
    <Layout>
      <GlobalStyle />
      <Header />
      {isLoading ? (
        <Loader/>
      ) : (
        <StyledContainer>
          <StyledH1>Our Pizzas</StyledH1>
          <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
  <StyledGridContainer>
    {orderItems.map((item) => (
      <StyledItemContainer key={item.id}>
        <StyledImage loading='lazy' src={item.image_path} />
        <StyledTextContainer>
          <StyledH1>{item.name}</StyledH1>
          <StyledPrice>${item.price}</StyledPrice>
          {item.countInStock <= 0 && <p>Out of Stock</p>}
          <Accordion
  style={{ background: 'none', boxShadow: 'none',  }}
  expanded={openAccordion === item.id}
  onChange={(e, isExpanded) => setOpenAccordion(isExpanded ? item.id : null)}
  disabled={item.countInStock === 0}
>
<AccordionSummary
  style={{marginTop: '-50px'}}
  expandIcon={<FaArrowDown />}
  aria-controls="panel1a-content"
  id="panel1a-header"
/>
  <StyledToppingsContainer>
    <h4>Extra Toppings</h4>
    {Object.keys(extraToppings).map((topping, index) => {
      const isChecked = (tempToppings[uniqueId] || []).includes(topping);

      return (
        <StyledBox key={index} onClick={() => handleAddOnsEvent(topping, item.id, uniqueId)}>
          <StyledBoxInput type='button'>
            {isChecked ? <CheckmarkImage src={checkmark} alt="checked" /> : null}
          </StyledBoxInput>
          <p>{topping}</p>
          <p>${extraToppings[topping].price}</p>
        </StyledBox>
      );
    })}
  </StyledToppingsContainer>
  <StyledTextButtonContainer style={{ marginTop: '16px' }}>
    <StyledButton disabled={item.countInStock <= 0 || showPaymentForm} onClick={() => addToCart({ ...item, toppings: tempToppings[uniqueId] || [] })}>Add to cart</StyledButton>
  </StyledTextButtonContainer>
</Accordion>
        </StyledTextContainer>
      </StyledItemContainer>
    ))}
  </StyledGridContainer>
  </Grid>
  <Grid item xs={12} md={4}>
        <StyledCartContainer>
          {cartItems && cartItems.length > 0 && (
            <StyledH2>Cart Checkout</StyledH2>
          )}
          {cartItems.map((cartItem, index) => {
  const menuItem = orderItems.find((orderItem) => orderItem.id === cartItem.id);
  return (
    <StyledCartItem id='cart-checkout' key={cartItem.id}>
       <StyledButtonContainer>
       <StyledH2>
       {cartItem.quantity}x {cartItem.name} {Array.isArray(cartItem.selectedToppings) && cartItem.selectedToppings.length > 0 ? cartItem.selectedToppings.join(', ') : null}
      </StyledH2>
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
      {cartItem.toppings && cartItem.toppings.length > 0 && <StyledH5>Additional Toppings</StyledH5>}
      <StyledTextContainer>
      {cartItem.toppings.map((topping, index) => (
  <div key={index} className="column">
    <StyledText>{topping}</StyledText>
  </div>
))}

      </StyledTextContainer>
    </StyledCartItem>
  );
})}
{cartItems && cartItems.length > 0 && (
  <>
  <Layout>
    <StyledTotal>Total: ${calculateTotal().toFixed(2)}</StyledTotal>
    {!showCheckoutForm && (
      <StyledCheckoutButton onClick={handleCheckout}>
        Checkout
      </StyledCheckoutButton>
    )}
    </Layout>
  </>
)}
          {showCheckoutForm && (
            <>
            <Layout>
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
                setCustomerInfo({ ...customerInfo, email: event.target.value })}
            />
            <ErrorMessage>{formErrors.email}</ErrorMessage>
          <StyledLabel>Phone</StyledLabel>
            <StyledInput
              type="tel"
              value={customerInfo.phone}
              onChange={(event) =>
                setCustomerInfo({ ...customerInfo, phone: event.target.value })}
            />
            <ErrorMessage>{formErrors.phone}</ErrorMessage>
          <StyledCartButton type="submit">Submit</StyledCartButton>
        </StyledForm>
        </Layout>   
  </>
      )}
      {showPaymentForm && stripePromise && clientSecret && (
  <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
    <CheckoutForm orderId={orderId} />
  </Elements>
)}
    </StyledCartContainer>
    </Grid>
      </Grid>
  </StyledContainer>
      )}
      </Layout>
</>
  );
};

export default Orderscreen;