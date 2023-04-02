import React, { useState, useContext } from 'react'
import GlobalStyle from '../../GlobalStyles'
import Header from '../../components/Header/Header'
import axios from 'axios'
import Layout from '../../components/Layout'
import { UserContext } from '../../UserContext'
import {
  LoginWrapper,
  StyledTitle,
  StyledForm,
  StyledLabel,
  StyledButtonContainer,
  StyledButton,
  StyledInput,
  StyledLink,
  StyledError
} from './RegisterScreenElements'
import { useNavigate } from 'react-router-dom'

const Registerscreen = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const {user, setUser} = useContext(UserContext)

  const navigate = useNavigate()

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

 const submitHandler = async (event) => {
  event.preventDefault()

  const errors = {};

  if(!username){
    errors.username = 'Username is required'
  }
  if(!email){
    errors.email = 'Email is required'
  }
  if(!password){
    errors.password = 'Password is required'
  }
  if(!confirmPassword){
    errors.confirmPassword = 'Confirm password is required'
  }

  setFormErrors(errors)

  if(confirmPassword !== password){
    setMessage('Password does not match')
  }

  if(Object.keys(errors).length === 0){
    try{
      const response = await axios.post('/api/register',{
        username: username,
        email: email,
        password: password,
      })
      if(response.data.access_token){
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('username', response.data.username)
  
        setUser({username: response.data.username})
        navigate('/')
      }  
    } catch(error){
      if(error.response){
        setMessage(`Register failed: ${error.response.data.message}`)
      } else {
        setMessage('Register failed. Please check your inputs and try again.')
      }
    }
  }
 }  
  return (
    <>
    <Layout>
    <GlobalStyle/>
    <Header/>
    <LoginWrapper>
    <StyledForm onSubmit={submitHandler}>
      {message && <StyledError>{message}</StyledError>}
      <StyledTitle>Register</StyledTitle>
      <StyledLabel>Username</StyledLabel>
      <StyledInput
      type='text'
      onChange={(e) => setUsername(e.target.value)}
      value={username}
      id='username'
      placeholder='eg. yolo1998'
      >
      </StyledInput>
      <StyledError>{formErrors.username}</StyledError>
      <StyledLabel>Email</StyledLabel>
      <StyledInput
      type='text'
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      id='email'
      placeholder='eg. yolo1998@gmail.com'
      >
      </StyledInput>
      <StyledError>{formErrors.email}</StyledError>
      <StyledLabel>Password</StyledLabel>
      <StyledInput
      type='password'
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      id='password'
      >
      </StyledInput>
      <StyledError>{formErrors.password}</StyledError>
      <StyledLabel>Confirm Password</StyledLabel>
      <StyledInput
      type='password'
      onChange={(e) => setConfirmPassword(e.target.value)}
      value={confirmPassword}
      id='confirmPassword'
      ></StyledInput>
      <StyledError>{formErrors.confirmPassword}</StyledError>
    <StyledButtonContainer>
    <StyledLink to='/login'>Already have an account? Click here</StyledLink>
      <StyledButton
      type='submit'
      >Register</StyledButton>
    </StyledButtonContainer>
    </StyledForm>
    </LoginWrapper>
    </Layout>
    </>
  )
}

export default Registerscreen