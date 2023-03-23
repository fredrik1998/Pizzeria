import styled from 'styled-components'

export const StyledContainer = styled.div`
  position: relative; /* Set container to relative position */
  width: 100%;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 60vh;
`;

export const StyledH1 = styled.h1`
  position: absolute; 
  background: none;
  top: 20%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  font-size: 7em;
  font-weight: 700;
  color: #fff;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
`;

export const StyledDesc = styled.em`
position: absolute;
background: none;
top: 27%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 20px;
font-weight: 700;
text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);`
