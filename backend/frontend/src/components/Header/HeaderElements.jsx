import styled from "styled-components";
import { Link } from 'react-router-dom'

export const StyledHeader = styled.header`
display: flex;
justify-content: space-evenly;
align-items: center;
border-bottom: 1px solid #ccc;
padding-bottom: 2em;
`

export const StyledLink = styled(Link)`
font-size: 40px;
font-weight: 700;
color: #000;
margin-top: 10px;
text-decoration: none;
`
export const StyledLinkOrder = styled(Link)`
font-size: 16px;
text-decoration: none;
border-radius: 18px;
width: 100%;
max-width: 150px;
text-align: center;
font-weight: 700;
letter-spacing: 0.1rem;
border: none;
color: #fafafa;
padding: 15px;
margin-top: 15px;
background-color: #c8102e;
cursor: pointer;
`
export const StyledButton = styled.button`
font-size: 16px;
width: 100%;
max-width: 200px;
border-radius: 18px;
font-weight: 700;
letter-spacing: 0.1rem;
border: none;
color: #fafafa;
margin-bottom: 10px;
padding: 15px;
background-color: #c8102e;
cursor: pointer;
:disabled{
  background-color: #ccc;
  cursor: not-allowed;
}

`;

export const StyledCart = styled.div`
margin-top: 20px
`

export const StyledSeperator = styled.div`
border: 1px solid #ccc;
`
export const StyledImg = styled.img`
width: 30px;
height: 30px;
`

export const StyledSpan = styled.span`
 display: inline-block;
  position: relative;
  top: -0.5rem;
  left: -0.2rem;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: red;
  color: #fff;
  padding: 0.2rem;
  border-radius: 50%;
  letter-spacing: 0;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
`

