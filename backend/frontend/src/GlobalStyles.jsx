import { createGlobalStyle } from 'styled-components';

 const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    background-color: #f3f0dd;
    font-family: 'League Spartan', sans-serif;

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
  }
`;

export default GlobalStyle