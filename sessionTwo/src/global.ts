import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: ${({ theme }) => theme.spacing.large};
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    min-height: 100vh;
  }

  code {
    font-family: ${({ theme }) => theme.fonts.code};
    background-color: ${({ theme }) => theme.colors.surface};
    padding: 2px 6px;
    border-radius: 4px;
  }
`;

export default GlobalStyle;
