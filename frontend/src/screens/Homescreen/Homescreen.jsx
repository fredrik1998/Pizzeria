import React from 'react'
import GlobalStyles from '../../GlobalStyles'
import { StyledContainer, StyledImage, StyledH1 } from './HomescreenElements'
import Navbar from '../../components/Navbar/Navbar'
import img from '../../images/pizzeria.jpg'
const Homescreen = () => {
  return (
    <>
    <GlobalStyles/>
    <StyledContainer>
    <StyledImage src={img}></StyledImage>
    <Navbar/>
    </StyledContainer>
    </>
  )
}

export default Homescreen