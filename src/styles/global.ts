import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #fafafa;

  max-width: 1120px;
  margin: 2rem auto;
}
`;
