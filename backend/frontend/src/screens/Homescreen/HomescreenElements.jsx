import styled from 'styled-components'

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 60vh;
  @media screen and (max-width: 821px) {
    height: 40vh;
  }
`;

export const StyledH1 = styled.h1`
position: absolute; 
background: none;
top: 10%; 
left: 50%; 
transform: translate(-50%, -50%); 
font-size: 7em;
font-weight: 700;
color: #fff;
text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
`;

export const StyledMotto = styled.em`
position: absolute;
background: none;
top: 17%;
left: 50%;
color: #ccc;
transform: translate(-50%, -50%);
font-size: 24px;
font-weight: 700;
text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
@media screen and (max-width: 767px){
  font-size: 22px;
}
`

export const StyledDescContainer = styled.p`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
margin: 0 auto;
margin-top: 100px;
`

export const StyledDesc = styled.p`
font-size: 20px;
font-weight: 700;
color: #121212;
letter-spacing: .1rem;
`