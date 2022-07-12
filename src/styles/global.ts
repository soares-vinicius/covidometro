import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
     box-sizing: border-box;
     outline: 0;
     font-family: 'Spectral', serif;
  }
  
  body {
    -webkit-font-smoothing: antialiased;   
    margin: 0;
    padding: 0;
    background-color: #fffbfa;
  }

  button {
    cursor: pointer;
  }
`;
