import React, { useState , useEffect} from 'react';

import { useNavigate } from 'react-router-dom';
import { useStripe, useElements, CardElement, PaymentElement} from '@stripe/react-stripe-js';
import styled from 'styled-components';


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
`;

const StyledCardElement = styled(CardElement)`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
font-size: 16px;
border-radius: 4px;
width: 100%;
margin: 0 auto;
font-weight: 700;
letter-spacing: 0.1rem;
padding: 10px;
border: none;
color: #fafafa;
padding: 20px;
margin-top: 20px;
margin-bottom: 20px;
background-color: #c8102e;
border: 2px solid #c8102e;
cursor: pointer;
`;

const CheckoutForm = ({orderId}) => {
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  
    setProcessing(true);
    const {error, paymentIntent} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success/${orderId}`
      },   
    });
   
    if (error) {
      setError(error.message);
      setProcessing(false);
    } else if (paymentIntent.status === 'succeeded') {
      setSucceeded(true);
      setProcessing(false);
      navigate('/success')
    }
  };
  
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : null);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Payment</h3>
      <StyledLabel>Card Details</StyledLabel>
      <PaymentElement onChange={handleChange} />
      {error && <p>{error}</p>}
      <StyledButton
        type='submit'
        disabled={processing || disabled || succeeded}
      >
        {processing ? 'Processing...' : 'Pay Now'}
      </StyledButton>
      {succeeded && (
        <p>Payment succeeded!</p>
      )}
    </StyledForm>
  );
};
export default CheckoutForm