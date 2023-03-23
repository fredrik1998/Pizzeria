import styled from "styled-components";
import { Link } from 'react-router-dom'

export const StyledHeader = styled.header`
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid #ccc;
padding-bottom: 2em;
`

export const StyledTitle = styled.h1`
font-size: 40px;
color: #000;
margin-top: 20px;
`

export const StyledLink = styled(Link)`
font-size: 20px;
font-weight: 400;
color: #000;
margin-top: 10px;
text-decoration: none;
`

export const StyledSeperator = styled.div`
border: 1px solid #ccc;
`