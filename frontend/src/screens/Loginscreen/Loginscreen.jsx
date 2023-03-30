import React, {useEffect, useState} from 'react'
import GlobalStyle from '../../GlobalStyles'
import Header from '../../components/Header/Header'
import axios from 'axios';
import { 
    LoginWrapper,
    StyledTitle,
    StyledForm,
    StyledLabel,
    StyledInput, 
    StyledLink, 
    StyledButton,
    StyledButtonContainer,
    StyledError,
    
  } from './LoginscreenElements';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
const Loginscreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const [message, setMessage] = useState('')
    
    const navigate = useNavigate()

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
    })

    const submitHandler = async (event) => {
        event.preventDefault();
      
        const errors = {};
      
        if (!email) {
          errors.email = 'Email is required';
        }
      
        if (!password) {
          errors.password = 'Password is required';
        }
      
        setFormErrors(errors);
      
        if (Object.keys(errors).length === 0) {
          try {
            const response = await axios.post('/api/login', {
              username: email,
              password: password,
            });
      
            if (response.data.access_token) {
              // Save the access token in local storage or in your app state
              localStorage.setItem('access_token', response.data.access_token);
      
              // Redirect the user to the dashboard or another protected route
              navigate('/admin')

            }
          } catch (error) {
            // Handle errors from the server
            setMessage('Login failed. Please check your email and password.');
          }
        }
      };
      
  return (
    <>
    <Layout>
    <GlobalStyle/>
    <Header/>
    <LoginWrapper>
        <StyledForm onSubmit={submitHandler}>
          {message && <StyledError>{message}</StyledError>}
   
        <StyledTitle>Sign in</StyledTitle>
          <StyledLabel>Email</StyledLabel>
          <StyledInput 
          type='text'
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          placeholder='eg. Fredrik Andrén'
          >
          </StyledInput>
          <StyledError>{formErrors.email}</StyledError>
          <StyledLabel>Password</StyledLabel>
          <StyledInput 
          type='password'
          id='password'
          onChange={(e) => setPassword(e.target.value)}
          >
          </StyledInput>
          <StyledError>{formErrors.password}</StyledError>
          <StyledButtonContainer>
          <StyledLink to='/register'>Dont have an account? click here</StyledLink>
          <StyledButton type='submit'>Login</StyledButton>
          </StyledButtonContainer>
        </StyledForm>
      </LoginWrapper>
      </Layout>
    </>
  )
}

export default Loginscreen