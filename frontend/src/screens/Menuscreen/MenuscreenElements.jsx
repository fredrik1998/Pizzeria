import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridContainer = styled.div`
  display: grid;
grid-template-columns: repeat(2, 1fr);
@media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledH1 = styled.h1`
font-size: 32px;
margin-bottom: 24px;
`
export const StyledText = styled.p`
font-size: 18px;
margin-bottom: 24px;
`
export const StyledPrice = styled.em`
font-size: 24px;
margin-bottom: 24px;
font-weight: 700;
`
export const StyledImage = styled.img`
width: 200px;
height: 200px;
margin-bottom: 24px;
border-radius: 10px;
`
export const StyledLink = styled(Link)`
font-size: 18px;
text-decoration: none;
margin-top: 24px;
color: #000;
`