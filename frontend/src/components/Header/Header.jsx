import React, {useState} from 'react'
import {StyledHeader, StyledLink, StyledSeperator, StyledTitle, StyledImg } from './HeaderElements'
import img from '../../../public/pizzaicon.png'
const Header = () => {
  return (
    <StyledHeader>
        <StyledTitle><StyledImg src={img}></StyledImg>Pizzetta</StyledTitle>
        <StyledLink></StyledLink>
    </StyledHeader>
  )
}

export default Header