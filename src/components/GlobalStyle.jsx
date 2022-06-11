import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  button {
  font: inherit;
  color: inherit;
  border: none;
  cursor: pointer;
  background-color: transparent;
}
`;
