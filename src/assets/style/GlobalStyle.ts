// import plugin
import * as styled from "styled-components";

interface GlobalStyleProps {
  theme: {
    white: string;
    black: string;
    aqua: string;
    riverBed: string;
    blueDark: string;
    blue: string;
    gray: string;
    danger: string;
    break: { small: string; main: string; big: string };
  };
}

// create & import new style
const GlobalStyle = styled.createGlobalStyle<GlobalStyleProps>`
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
    --uxu-pl-text: ${({ theme }) => theme.white};
    --uxu-pl-text-off: ${({ theme }) => theme.gray};
    --uxu-pl-border: ${({ theme }) => theme.riverBed};
    --uxu-pl-link-start: ${({ theme }) => theme.aqua};
    --uxu-pl-link-hover: ${({ theme }) => theme.white};
    --uxu-pl-bg-primary: ${({ theme }) => theme.blueDark};
    --uxu-pl-bg-secondary: ${({ theme }) => theme.blue};
    --uxu-pl-button-text: ${({ theme }) => theme.white};
    --uxu-pl-button-text-hover: ${({ theme }) => theme.aqua};
    --uxu-pl-button-background: ${({ theme }) => theme.aqua};
    --uxu-pl-button-background-hover: ${({ theme }) => theme.white};
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1.2;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: normal;
    color: var(--uxu-pl-text);
    background-color: var(--uxu-pl-bg-primary);
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
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
    font-weight: 300;
    font-family: "Open Sans", sans-serif;
  }

  p,
  b,
  a,
  span,
  strong {
    font-family: "Open Sans", sans-serif;
  }

  b,
  strong {
    font-weight: bold;
  }

  a {
    opacity: 1;
    transition: all 0.3s;
    text-decoration: none;
    color: var(--uxu-pl-link-start);

    &:hover {
      color: var(--uxu-pl-link-hover);
    }
  }

  svg {
    transition: all 0.3s;
    fill: var(--uxu-pl-link-start);
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  section {
    width: 100%;
    position: relative;
  }
`;

export default GlobalStyle;
