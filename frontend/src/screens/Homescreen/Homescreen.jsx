import React from 'react'
import GlobalStyles from '../../GlobalStyles'
import { StyledContainer, StyledImage, StyledH1, StyledDesc } from './HomescreenElements'
import Navbar from '../../components/Navbar/Navbar'
import img from '../../images/pizzeria.jpg'
const Homescreen = () => {
  return (
    <>
    <GlobalStyles/>
    <StyledContainer>
    <StyledImage src={img}></StyledImage>
    <StyledH1>Pizzetta</StyledH1>
    <StyledDesc>Personalized Pizzas, Perfectly Made</StyledDesc>
    <Navbar/>
    </StyledContainer>
    </>
  )
}

export default Homescreen