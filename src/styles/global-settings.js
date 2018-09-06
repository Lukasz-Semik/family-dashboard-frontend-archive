import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }

  html{
    font-size: 62.5%;
  }

  body {
    background: ${colors.mainGreen};
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
