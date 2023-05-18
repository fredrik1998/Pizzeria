import React from "react";
import { StyledNav, StyledNavLink } from "./NavbarElements";
const Navbar = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/menu">Menu</StyledNavLink>
      <StyledNavLink to="/order">Order</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </StyledNav>
  );
};

export default Navbar;
