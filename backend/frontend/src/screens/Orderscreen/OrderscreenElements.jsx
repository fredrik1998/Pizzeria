import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
export const StyledContainer = styled.main`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    margin-left: 20px;
  }
`;

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  width: 50%;
`;

export const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const StyledCartContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: -40px;
  gap: 40px;
  width: 100%;
  @media screen and (max-width: 767px) {
    margin-top: -10px;
    
  }
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StyledH1 = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const StyledH2 = styled.h2`
font-size: 32px;
font-weight: 700;
`
export const StyledH5 = styled.h5`
font-size: 20px;
font-weight: 700;
margin-bottom: 10px;
margin-top: 20px;`

export const StyledText = styled.p`
display: flex;
justify-content: center;
flex-direction: column;
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
width: 100%;
max-width: 200px;
font-weight: 700;
border: 2px solid #c8102e;
border-radius: 4px;
color: #fafafa;
margin-bottom: 10px;
padding: 16px;
background-color: #c8102e;
cursor: pointer;
:disabled{
  background-color: #ccc;
  cursor: not-allowed;
}

`;

export const StyledTextButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;


export const StyledCartItem = styled.div`
display: flex;
flex-direction: column;
`

export const StyledTotal = styled.p`
 font-size: 24px;
  margin-bottom: 8px;
  font-weight: 700;`

export const StyledCheckoutButton = styled.button`
font-size: 16px;
width: 100%;
max-width: 250px;
font-weight: 700;
border: 2px solid #c8102e;
margin-top: 20px;
border-radius: 4px;
color: #fafafa;
padding: 16px;
background-color: #c8102e;
margin-bottom: 20px;
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
width: 100%;
max-width: 500px;
font-weight: 700;
border: 2px solid #c8102e;
color: #fafafa;
padding: 16px;
border-radius: 4px;
margin-top: 20px;
background-color: #c8102e;
cursor: pointer;
margin-bottom: 20px;
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

export const StyledBox = styled.div`
display: flex;
justify-content: flex-start;
gap: 10px;
width: 100%;
height: 50px;
border-radius: 10px;
padding: 14px;
margin-right: 2em;
cursor: pointer;`

export const StyledBoxInput = styled.button`
 display: none;
 background-color: none;
  display: flex;
  align-items: center;
  background: transparent;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 5px;
`;

export const CheckmarkImage = styled.img`
background-color: green;
display: flex;
justify-content: center;
align-items: center;
margin-left: -8px;
width: 20px;
height: 20px;
cursor: pointer;
border-radius: 5px;
`
export const StyledToppings = styled.p`
font-size: 16px;
gap: 20px;
`
export const StyledUl = styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const StyledToppingsContainer = styled.div`
`