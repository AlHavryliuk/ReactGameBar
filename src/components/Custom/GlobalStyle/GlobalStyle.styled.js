import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.mainBackgroundColor};
  }
  `;
