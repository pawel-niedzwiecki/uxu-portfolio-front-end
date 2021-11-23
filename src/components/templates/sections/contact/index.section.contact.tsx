// import plugin
import React, { useContext } from "react";

// import component
import { ButtonOutLink, ButtonSubmit } from "components/atoms/button/index.button";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { InputText, InputEmail, InputTel, TextArea, CheckBoxClassic } from "components/molecules/form/index.form";

// import styled
import { Section, SelectBox, List, Header, BoxContact, Title, Form, BoxAnimation, SharpCircle, SharpSquare, SharpTriangle } from "./style/styled";

// import context
import { LanguageContext } from "providers/LanguageProvider";

//import svg
import noise from "assets/icon/noise.svg";
import { ReactComponent as GitHub } from "assets/icon/github.svg";
import { ReactComponent as Linkedin } from "assets/icon/linkedin.svg";
import { ReactComponent as Instagram } from "assets/icon/instagram.svg";
import { ReactComponent as Square } from "assets/icon/square.svg";

// create component
const ContactSectionComponent = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Section id="contact">
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <SelectBox>
              <Header style={{ paddingBottom: "2rem" }}>UXU</Header>
              <List>
                <li>ul. Serwituty 25</li>
                <li>02-233 Warszawa</li>
                <li>Polska</li>
                <li style={{ paddingTop: "3rem", fontWeight: "bold" }}>VAT-ID</li>
                <li>5223077290</li>
                <li style={{ paddingTop: "3rem", fontWeight: "bold" }}>REGON</li>
                <li>365979030</li>
                <li style={{ paddingTop: "3rem", fontWeight: "bold" }}>KRS</li>
                <li>0000649985</li>
              </List>

              <List style={{ paddingTop: "4rem" }}>
                <li>
                  <ButtonOutLink href="tel:+48888333885">+48 888 333 885</ButtonOutLink>
                </li>
                <li>
                  <ButtonOutLink href="mailto:hello@uxu.pl">hello@uxu.pl</ButtonOutLink>
                </li>
                <li>
                  <List typ="level">
                    <li>
                      <ButtonOutLink href="https://github.com" title="GitHub">
                        <GitHub />
                      </ButtonOutLink>
                    </li>
                    <li>
                      <ButtonOutLink href="https://github.com" title="Instagram">
                        <Instagram />
                      </ButtonOutLink>
                    </li>
                    <li>
                      <ButtonOutLink href="https://github.com" title="LinkedIn">
                        <Linkedin />
                      </ButtonOutLink>
                    </li>
                  </List>
                </li>
              </List>
            </SelectBox>
          </Col>

          <Col xs={12} md={5}>
            <BoxContact>
              <Title>{language === "pl" ? "Kontakt" : "Contact"}</Title>

              <Form>
                <InputText id="name">Twoje imię</InputText>
                <InputEmail id="email">Adres Email</InputEmail>
                <InputTel id="tel">Numer telefonu</InputTel>
                <TextArea id="description">Twoja wiadomość</TextArea>
                <CheckBoxClassic id="subscribeNews">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                  diam
                </CheckBoxClassic>

                <ButtonSubmit style={{ marginTop: "3rem" }}>wyślij</ButtonSubmit>
              </Form>
            </BoxContact>
          </Col>
        </Row>
        <BoxAnimation>
          <SharpCircle bg={noise}>
            <div className="isolate">
              <div className="ball-shadow"></div>
              <div className="ball-light"></div>
            </div>
          </SharpCircle>
          <SharpSquare bg={noise}>
            <div className="isolate">
              <div className="ball-shadow"></div>
              <div className="ball-light"></div>
            </div>
          </SharpSquare>
          <SharpTriangle bg={noise}>
            <div className="isolate">
              <div className="ball-shadow"></div>
              <div className="ball-light"></div>
            </div>
          </SharpTriangle>

          <Square style={{ width: "30rem" }} />
          <Square style={{ width: "30rem", marginLeft: "4.2rem", top: "-2px", position: "relative" }} />
        </BoxAnimation>
      </Container>
    </Section>
  );
};

// export component
export default ContactSectionComponent;
