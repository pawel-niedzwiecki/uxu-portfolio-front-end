// import plugin
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

// import styled
import { Header, Logo, List, Item } from "./style/styled";

// import component
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index";

// import hooks
import useWindowData from "hooks/useWindowData";

// import provider
import { LanguageContext } from "providers/LanguageProvider";

//import svg
import { ReactComponent as Brand } from "assets/icon/logo.svg";

// create new component
const HeaderComponent = () => {
  const windowData = useWindowData();
  const { language, languageChange } = useContext(LanguageContext);

  return (
    <Header
      style={{
        backgroundColor: `${windowData.pageScrollY < 120 ? "transparent" : "var(--uxu-pl-bg-secondary)"}`,
        padding: `${windowData.pageScrollY < 120 ? "var(--uxu-pl-break-bigger) 0" : "var(--uxu-pl-break-main) 0"}`,
        maxHeight: `${windowData.pageScrollY < 120 ? "6rem" : "auto"}`,
      }}
    >
      <Container>
        <Row>
          <Col xs={6}>
            <Logo to={`/${language}`}>
              <Brand />
            </Logo>
          </Col>
          <Col xs={6} style={{ display: "flex" }}>
            <List>
              <Item>
                <NavLink
                  to="/pl"
                  onClick={() => {
                    languageChange("pl");
                  }}
                >
                  PL
                </NavLink>
              </Item>
              <Item>
                <NavLink
                  to="/en"
                  onClick={() => {
                    languageChange("en");
                  }}
                >
                  EN
                </NavLink>
              </Item>
            </List>
          </Col>
        </Row>
      </Container>
    </Header>
  );
};

// export new component
export default HeaderComponent;
