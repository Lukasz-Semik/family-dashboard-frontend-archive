import { injectGlobal } from 'styled-components';

/* eslint-disable no-unused-expressions */
injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body {
    background: red;
  }

  a {
    text-decoration: none;
  }
`;
/* eslint-enable */
