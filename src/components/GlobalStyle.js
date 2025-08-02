import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: #f0f2f5;
  }

  .App {
    padding: 40px 20px;
  }

  li{
    list-style: none;
  }
`;

export default GlobalStyle;