import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    height: 60vh;
  }
`;
export const StyledTitle = styled.h1`
  font-size: 43px;
  color: #121212;
  margin-top: 40px;
  margin-bottom: 20px;
  text-transform: uppercase;
  align-self: flex-start;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;
export const StyledLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 16px;
`;
export const StyledButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;
export const StyledButton = styled.button`
  font-size: 16px;
  border-radius: 3px;
  width: 100%;
  max-width: 100px;
  font-weight: 700;
  margin-top: 40px;
  padding: 15px;
  border: 2px solid #c8102e;
  color: #fafafa;
  background-color: #c8102e;
  cursor: pointer;
`;
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
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: #121212;
  font-weight: 700;
  margin-top: 40px;
`;
export const StyledError = styled.p`
  display: flex;
  align-self: flex-end;
  margin-top: 10px;
  color: red;
  font-size: 16px;
`;
