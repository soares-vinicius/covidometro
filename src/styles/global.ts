import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
     box-sizing: border-box;
     outline: 0;
     font-family: 'Spectral', serif;
  }
  
  body {
    -webkit-font-smoothing: antialiased;   
  }

  button {
    cursor: pointer;
  }
`;
