import React from 'react'
import { StyledNav, StyledNavLink } from './NavbarElements'
 const Navbar = () => {
  return (
    <StyledNav>
      <StyledNavLink to='/menu'>Menu</StyledNavLink>
      <StyledNavLink>About us</StyledNavLink>
      <StyledNavLink>Contact</StyledNavLink>
      <StyledNavLink to='/order'>Order</StyledNavLink>
    </StyledNav>
  )
}

export default Navbar
