import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledNav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width: 100%;
`

export const StyledNavLink = styled(Link)`
font-size: 24px;
font-weight: 700;
color: #000;
text-decoration: none;
margin-top: 40px;
cursor: pointer;
`