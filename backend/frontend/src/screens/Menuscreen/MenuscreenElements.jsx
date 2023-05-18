import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin: 20px;
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: none;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 32px;
  margin-bottom: 24px;
`;
export const StyledText = styled.p`
  font-size: 18px;
  margin-bottom: 24px;
`;
export const StyledPrice = styled.em`
  font-size: 24px;
  margin-bottom: 24px;
  font-weight: 700;
`;
export const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 24px;
`;
export const StyledLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  border-radius: 18px;
  width: 20%;
  text-align: center;
  max-width: 500px;
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 10px;
  border: none;
  color: #fafafa;
  padding: 20px;
  margin-top: 20px;
  background-color: #c8102e;
  cursor: pointer;
`;
