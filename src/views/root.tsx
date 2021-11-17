// import plugin
import React, { useContext } from "react";

import { ThemeProvider } from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";

// import theme & settings
import settings from "assets/style/settings";
import GlobalStyle from "assets/style/GlobalStyle";

// import provider
import LanguageProvider, { LanguageContext } from "providers/LanguageProvider";

// import component
import Home from "views/home";
import LayoutComponent from "layout/index.layout";

// crate component
const Root = () => {
  const { language } = useContext(LanguageContext);
  return (
    <ThemeProvider theme={settings}>
      <GlobalStyle />
      <LanguageProvider>
        <LayoutComponent>
          <Switch>
            <Route exact path="/">
              {language === "pl" ? <Redirect to="/pl" /> : <Redirect to="/en" />}
            </Route>
            <Route path="/:lang">
              <Home />
            </Route>
            <Route path="*">404</Route>
          </Switch>
        </LayoutComponent>
      </LanguageProvider>
    </ThemeProvider>
  );
};

// export component
export default Root;
