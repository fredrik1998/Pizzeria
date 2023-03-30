import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledContainer = styled.main`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
height: 100vh;
gap: 20px;
`
export const StyledTextContainer = styled.div`
margin-top: 20px`

export const StyledH2 = styled.h2`
font-size: 28px;
margin-top: 20px;
margin-left: -100px;
text-decoration: underline;
`
export const StyledText = styled.p`
font-size: 20px;
margin-top: 20px;
`
export const StyledLi = styled.li`
text-decoration: none;
list-style-type: none;
margin-bottom: 40px;
margin-left: -40px;
font-size: 20px;
`
export const StyledUl = styled.ul`
text-decoration: none;
margin-top: 20px;
`
export const StyledH3 = styled.h3`
margin-top: 20px;
font-size: 24px;
`

export const StyledH1 = styled.h1`
font-size: 32px;
margin-top: 40px;
`
export const StyledLink = styled(Link)`
display: flex;
align-self: flex-start;
margin-left: 30px;
text-decoration: none;
font-size: 20px;
` 
export const StyledTotal = styled.em`
font-size: 24px;
text-decoration: underline;
`
export const StyledImg = styled.img`
width: 50px;
height: 50px;
`;

