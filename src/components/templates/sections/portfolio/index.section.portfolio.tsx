// import plugin
import React from "react";

// import component
import { Button, ButtonOutLink } from "components/atoms/button/index.button";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

// import styled
import {
  Section,
  SelectBox,
  List,
  Header,
  FlipBox,
  FlipBoxInner,
  FlipBoxFront,
  FlipBoxBack,
  FlipBoxHeader,
  FlipBoxList,
  FlipBoxListItem,
  FlipBoxButton,
} from "./style/styled";

// create component
const PortfolioSectionComponent = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <SelectBox>
              <Header style={{ paddingBottom: "2rem" }}>Portfolio</Header>
              <List>
                <li>
                  <Button>Gatsby.js</Button>
                </li>
                <li>
                  <Button>Gatsby.js</Button>
                </li>
                <li>
                  <Button>Gatsby.js</Button>
                </li>
              </List>
            </SelectBox>
          </Col>
          <Col xs={12} md={9}>
            <Row>
              <Col xs={12} md={6} lg={4} className="col">
                <FlipBox>
                  <FlipBoxInner>
                    <FlipBoxFront>
                      <Header>ANHOL</Header>
                    </FlipBoxFront>
                    <FlipBoxBack>
                      <FlipBoxHeader>technologie</FlipBoxHeader>
                      <FlipBoxList>
                        <FlipBoxListItem>
                          <span>#</span>javascript
                        </FlipBoxListItem>
                        <FlipBoxListItem>
                          <span>#</span>css
                        </FlipBoxListItem>
                        <FlipBoxListItem>
                          <span>#</span>react
                        </FlipBoxListItem>
                        <FlipBoxListItem>
                          <span>#</span>gatsby
                        </FlipBoxListItem>
                        <FlipBoxListItem>
                          <span>#</span>javascript
                        </FlipBoxListItem>
                        <FlipBoxListItem>
                          <span>#</span>css
                        </FlipBoxListItem>
                        <FlipBoxListItem>
                          <span>#</span>react
                        </FlipBoxListItem>
                        <FlipBoxListItem>
                          <span>#</span>gatsby
                        </FlipBoxListItem>
                      </FlipBoxList>

                      <FlipBoxButton>
                        <ButtonOutLink href="#">Online</ButtonOutLink>
                        <ButtonOutLink href="#">GitHub</ButtonOutLink>
                      </FlipBoxButton>
                    </FlipBoxBack>
                  </FlipBoxInner>
                </FlipBox>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

// export component
export default PortfolioSectionComponent;
