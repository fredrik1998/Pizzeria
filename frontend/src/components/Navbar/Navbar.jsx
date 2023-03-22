import React from 'react'
import { StyledNav, StyledNavLink } from './NavbarElements'
 const Navbar = () => {
  return (
    <StyledNav>
      <StyledNavLink>Menu</StyledNavLink>
      <StyledNavLink>About us</StyledNavLink>
      <StyledNavLink>Contact</StyledNavLink>
      <StyledNavLink>Order</StyledNavLink>
    </StyledNav>
  )
}

export default Navbar
