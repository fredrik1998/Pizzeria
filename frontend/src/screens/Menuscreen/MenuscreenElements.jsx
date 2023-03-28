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
background-color: hsl(180, 29%, 50%);
cursor: pointer;
`