import React, {useState} from 'react'
import {StyledHeader, StyledLink, StyledSeperator, StyledTitle } from './HeaderElements'

const Header = () => {
  return (
    <StyledHeader>
        <StyledTitle>Pizzeria</StyledTitle>
        <StyledLink></StyledLink>
    </StyledHeader>
  )
}

export default Header