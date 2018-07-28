import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f6f6f6;
    text-rendering: optimizeLegibility !important;
    -webkit-fint-smoothing: antialiased !important;
    font-family: sans-serif;
  }
`;
