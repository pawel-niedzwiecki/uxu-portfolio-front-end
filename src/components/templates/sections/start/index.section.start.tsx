// import plugin
import React, { useState, useEffect, useContext } from "react";

// import component
import { Container, Row, Col } from "components/orgamis/flexboxgrid";

// import styled
import { Section, H1, H2, List, Item, Button } from "./style/styled";

// import provider
import { LanguageContext } from "providers/LanguageProvider";

// import img
import face from "assets/img/face.png";

// create component
const StartSectionComponent = () => {
  const { language } = useContext(LanguageContext);
  const [hello, setHello] = useState(false);

  const helloChange = (changeSwitch: boolean) => {
    setHello(changeSwitch);
  };

  useEffect(() => {
    helloChange(true);
  }, []);

  return (
    <Section>
      <Container className="bg" style={{ backgroundImage: `url(${face})` }}>
        <Row>
          <Col xs={12} md={8} className="col">
            {hello ? (
              <>
                <H2>{language === "pl" ? "Hej, mam na imię Paweł" : "Hey, i have name Paweł"}</H2>
                <H1>{language === "pl" ? "jestem programistom JavaScript" : "i am programmer JavaScript"}</H1>
                <Button>{language === "pl" ? "porozmawiajmy o twoim pomyśle" : "let's talk about you idea"}</Button>
                <List>
                  <Item>
                    <a href="#portfolio" title="portfolio">
                      portfolio
                    </a>
                  </Item>
                  <Item>
                    <a href="#history" title={language === "pl" ? "moja historia" : "my history"}>
                      {language === "pl" ? "moja historia" : "my history"}
                    </a>
                  </Item>
                  <Item>
                    <a href="#contact" title={language === "pl" ? "kontakt" : "contact"}>
                      {language === "pl" ? "kontakt" : "contact"}
                    </a>
                  </Item>
                </List>
              </>
            ) : (
              <></>
            )}
          </Col>
          <Col xs={12} md={4}></Col>
        </Row>
      </Container>
    </Section>
  );
};

// export component
export default StartSectionComponent;
