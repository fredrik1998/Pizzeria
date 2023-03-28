import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginWrapper = styled.main`
display: flex;
justify-content: center;
align-items: center;
height: 30vh;
flex-direction: column;
`

export const StyledTitle = styled.h1`
font-size: 43px;
color: #121212;
margin-top: 40px;
margin-bottom: 20px;
text-transform: uppercase;
align-self: flex-start;
`

export const StyledForm = styled.form`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
width: 50%;
@media screen and (max-width: 767px){
    width: 80%;
}
`
export const StyledLabel = styled.label`
display: flex;
justify-content: flex-start;
align-items: flex-start;
font-size: 16px;
`
export const StyledButtonContainer = styled.div`
display: flex;
gap: 30px;
justify-content: center;
align-items: center;
align-self: flex-end;
`
export const StyledButton = styled.button`
font-size: 16px;
border-radius: 18px;
font-weight: 700;
letter-spacing: 0.1rem;
padding: 10px;
border: none;
color: #fafafa;
padding: 20px;
background-color: hsl(180, 29%, 50%);
cursor: pointer;
`
export const StyledInput = styled.input`
font-size: 16px;
font-weight: 300;
border-radius: 10px;
padding: 15px;

width: 100%;
cursor: pointer;
font-weight: 700;
background-color: transparent;
border: 1px solid hsl(229, 24%, 87%);
`
export const StyledLink = styled(Link)`
text-decoration: none;
font-size: 16px;
color: #121212;
font-weight: 700;
`
export const StyledError = styled.p`
color: red;
font-size: 16px;`