// import plugin
import React, { useContext } from "react";
import { Provider } from "react-redux";
import { store } from "store";

import { ThemeProvider } from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";

// import theme & settings
import settings from "assets/style/settings";
import GlobalStyle from "assets/style/GlobalStyle";

// import provider
import DataBaseProvider from "providers/providers.dataBase";
import ProviderDataQuery from "providers/providers.dataQuery";
import LanguageProvider, { LanguageContext } from "providers/providers.language";

// import component
import Home from "views/home";
import LayoutComponent from "layout/index.layout";

// crate component
const Root = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Provider store={store}>
      <ThemeProvider theme={settings}>
        <GlobalStyle />
        <LanguageProvider>
          <ProviderDataQuery>
            <DataBaseProvider>
              <LayoutComponent>
                <Switch>
                  <Route exact path="/pl">
                    <Home />
                  </Route>
                  <Route exact path="/en">
                    <Home />
                  </Route>
                  <Route path="/*">{language === "pl" ? <Redirect to="/pl" /> : <Redirect to="/en" />}</Route>
                </Switch>
              </LayoutComponent>
            </DataBaseProvider>
          </ProviderDataQuery>
        </LanguageProvider>
      </ThemeProvider>
    </Provider>
  );
};

// export component
export default Root;
