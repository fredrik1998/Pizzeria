import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
export const StyledContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px;
`;

export const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  margin-bottom: 20px;
  gap: 20px;

  border-bottom: 1px solid #ccc;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const StyledCartContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StyledH1 = styled.h1`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const StyledText = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const StyledPrice = styled.em`
  font-size: 24px;
  margin-bottom: 8px;
  font-weight: 700;
`;

export const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
  border-radius: 10px;
`;

export const StyledLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  margin-top: 8px;
  color: #000;
`;

export const StyledButton = styled.button`
font-size: 16px;
width: 50%;
border-radius: 18px;
font-weight: 700;
letter-spacing: 0.1rem;
padding: 10px;
border: none;
color: #fafafa;
padding: 15px;
background-color: hsl(180, 29%, 50%);
cursor: pointer;
:disabled{
  background-color: #ccc;
  cursor: not-allowed;
}
@media screen and (max-width: 767px) {
width: 100%;
}
`;

export const StyledTextButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;


export const StyledCartItem = styled.div`

`

export const StyledTotal = styled.p`
 font-size: 24px;
  margin-bottom: 8px;
  font-weight: 700;`

export const StyledCheckoutButton = styled.button`
font-size: 16px;
border-radius: 18px;
width: 50%;
font-weight: 700;
letter-spacing: 0.1rem;
padding: 10px;
border: none;
color: #fafafa;
padding: 20px;
background-color: hsl(180, 29%, 50%);
cursor: pointer;
`
export const StyledButtonContainer = styled.div`
display: flex;
flex-direction: row;
`

export const CartButton = styled.button`
  border-radius: 10px;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  background: none;
  color: #000;
  font-weight: 700;
  &.disabled {
    color: rgba(255, 255, 255, 0.5);
    pointer-events: none;
    background: transparent;
  }
`

export const StyledForm = styled.form`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
`
export const StyledLabel = styled.label`
color: #000;
font-weight: 700;
margin-top: 30px;
`

export const StyledInput = styled.input`
font-size: 16px;
font-weight: 300;
border-radius: 10px;
width: 100%;
max-width: 500px;
cursor: pointer;
font-weight: 700;
color: hsl(213, 96%, 18%);
background-color: #FFF;
border: 1px solid hsl(229, 24%, 87%);
padding: 15px;
::placeholder{
  color: hsl(229, 24%, 87%);
}
:hover{
  border: 1px solid hsl(243, 100%, 62%);
}
`

export const StyledCartButton = styled.button`
font-size: 16px;
border-radius: 18px;
width: 100%;
max-width: 500px;
font-weight: 700;
letter-spacing: 0.1rem;
padding: 10px;
border: none;
color: #fafafa;
padding: 20px;
margin-top: 20px;
background-color: hsl(180, 29%, 50%);
cursor: pointer;
`
export const ErrorMessage = styled.p`
color: red;
`

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  grid-gap: 20px;
`;

export const StyledOrderItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
