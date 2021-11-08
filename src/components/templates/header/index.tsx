// import plugin
import React from "react";

// import styled
import { Header, LinkLogo } from "./style/styled";

// import component
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index";

// create interface
interface HeaderProps {}

//import svg
import LogoSVG from "assets/icon/logo.svg";

// create new component
const HeaderComponent = ({}: HeaderProps) => {
  return (
    <Header>
      <Container>
        <Row>
          <Col xs={12}>
            <LinkLogo to="/">
              <LogoSVG />
            </LinkLogo>
          </Col>
        </Row>
      </Container>
    </Header>
  );
};

// export new component
export default HeaderComponent;
