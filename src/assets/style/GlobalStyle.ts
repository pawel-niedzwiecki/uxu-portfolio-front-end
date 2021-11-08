// import plugin
import * as styled from "styled-components";

// create & import new style

const GlobalStyle = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-size: 62.5%;
  }

  :root {
    --uxu-pl-break-smaller: ${({ theme }) => theme.break.small};
    --uxu-pl-break-main: ${({ theme }) => theme.break.main};
    --uxu-pl-break-bigger: ${({ theme }) => theme.break.big};
    --polski-dev-text: ${({ theme }) => theme.white};
    --polski-dev-border: ${({ theme }) => theme.white};
    --polski-dev-link-start: ${({ theme }) => theme.white};
    --polski-dev-link-hover: ${({ theme }) => theme.white};
    --polski-dev-bg-primary: ${({ theme }) => theme.blueDark};
    --polski-dev-bg-secondary: ${({ theme }) => theme.white};
    --polski-dev-button-text: ${({ theme }) => theme.white};
    --polski-dev-button-text-hover: ${({ theme }) => theme.white};
    --polski-dev-button-background: ${({ theme }) => theme.white};
    --polski-dev-button-background-hover: ${({ theme }) => theme.white};
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1.2;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: normal;
    color: var(--polski-dev-text);
    background-color: var(--polski-dev-bg-primary);
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans",
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  p,
  b,
  a,
  span,
  strong {
    font-family: "Open Sans", sans-serif;
  }

  b,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: bold;
  }

  a {
    opacity: 1;
    transition: all 0.3s;
    text-decoration: none;
    color: var(--polski-dev-link-start);

    &:hover {
      color: var(--polski-dev-link-hover);
    }
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  section {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  form {
  }
`;

export default GlobalStyle;
