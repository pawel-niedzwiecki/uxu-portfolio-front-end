import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import useWindowData from "hooks/hooks.windowData";
import { LanguageContext } from "providers/providers.language";
import { ReactComponent as Brand } from "assets/icon/logo.svg";
import { Header, Logo, List, Item } from "./index.header.style";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const HeaderComponent = () => {
  const windowData = useWindowData();
  const { languageChange } = useContext(LanguageContext);

  return (
    <Header
      style={{
        backgroundColor: `${windowData.pageScrollY < 120 ? "transparent" : "var(--uxu-pl-bg-secondary)"}`,
        padding: `${windowData.pageScrollY < 120 ? "var(--uxu-pl-break-bigger) 0" : "var(--uxu-pl-break-main) 0"}`,
      }}
    >
      <Container>
        <Row>
          <Col xs={6} style={{ display: "flex", alignItems: "center" }}>
            <Logo
              onClick={() => {
                window.scrollTo({ top: document.getElementById("start").getBoundingClientRect().top, behavior: "smooth" });
              }}
            >
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
