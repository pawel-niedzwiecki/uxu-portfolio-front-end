// import plugin
import React from "react";
import { ThemeProvider } from "styled-components";

// import style
import settings from "assets/style/settings";
import GlobalStyle from "assets/style/GlobalStyle";

// import component
import HeaderX from "components/templates/header/index";

// create interface
interface PropsLayout {
  title?: string;
  children: React.ReactNode;
}

// create new component
const Layout = ({ title, children }: PropsLayout) => {
  return (
    <ThemeProvider theme={settings}>
      <GlobalStyle />

      <HeaderX />

      {children}
    </ThemeProvider>
  );
};

export default Layout;
