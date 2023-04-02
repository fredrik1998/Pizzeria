import styled from "styled-components";

export const StyledWrapper = styled.main`
  background-color: #f3f0dd;
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