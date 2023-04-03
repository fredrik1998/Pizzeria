import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledWrapper = styled.main`
  height: 100%;
  width: 100%;
  font-family: 'League Spartan', sans-serif;
  overflow-x: hidden;
`;

export const StyledButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px 20px;
  color: #121212;
  background: none;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 767px){
    width: 50px
  }
`;

export const StyledH1 = styled.h1`
margin-top: 20px;
margin-bottom: 20px;
margin-left: 20px
`
export const StyledLink = styled(Link)`
text-decoration: none;
font-size: 16px;
color: #121212;
font-weight: 700;
`