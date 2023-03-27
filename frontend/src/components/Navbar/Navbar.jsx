import React from 'react'
import { StyledNav, StyledNavLink } from './NavbarElements'
 const Navbar = () => {
  return (
    <StyledNav>
      <StyledNavLink to='/menu'>Menu</StyledNavLink>
      <StyledNavLink>About us</StyledNavLink>
      <StyledNavLink to='/login'>Login</StyledNavLink>
      <StyledNavLink to='/order'>Order</StyledNavLink>
    </StyledNav>
  )
}

export default Navbar
