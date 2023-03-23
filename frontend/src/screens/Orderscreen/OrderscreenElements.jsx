import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
`;

export const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  gap: 20px;

  border-bottom: 1px solid #ccc;

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
  display: block;
  width: 25%;
  padding: 10px 20px;
  background-color: #f5a623;
  color: #000;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const StyledTextButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StyledCartContainer = styled.div`


`
export const StyledCartItem = styled.div`

`
