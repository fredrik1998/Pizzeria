import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #f3f0dd;
  }
  *::-webkit-scrollbar {
    width: 16px;
  }
  *::-webkit-scrollbar-track {
    border-radius: 8px;
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    height: 56px;
    border-radius: 8px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: #888;
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const StyledWrapper = styled.main`
  background-color: #f3f0dd;
  height: 100%;
  width: 100%;
  font-family: "League Spartan", sans-serif;
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
  margin-left: -20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 50px;
  }
`;
