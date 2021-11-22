// import plugin
import React, { useState, useEffect, useContext } from "react";

// import component
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Button } from "components/atoms/button/index.button";

// import styled
import { Section, H1, H2, List, Item } from "./style/styled";

// import hooks
import useModal from "hooks/useModal";

// import provider
import { LanguageContext } from "providers/LanguageProvider";

// import img
import face from "assets/img/face.png";

// create component
const StartSectionComponent = () => {
  const { Modal, isOpen, handleOpenModal, handleClouseModal } = useModal();
  const { language } = useContext(LanguageContext);
  const [hello, setHello] = useState(false);

  const helloChange = (changeSwitch: boolean) => {
    setHello(changeSwitch);
  };

  useEffect(() => {
    helloChange(true);
  }, []);

  return (
    <Section id="start">
      <Container className="bg" style={{ backgroundImage: `url(${face})` }}>
        <Row>
          <Col xs={12} md={7} className="col">
            {hello ? (
              <>
                <H2>{language === "pl" ? "Hej, mam na imię Paweł" : "Hey, i have name Paweł"}</H2>
                <H1>{language === "pl" ? "jestem programistom JavaScript" : "i am programmer JavaScript"}</H1>
                <Button onClick={handleOpenModal} className="btn">
                  {language === "pl" ? "porozmawiajmy o Twoim pomyśle" : "let's talk about You idea"}
                </Button>
                {isOpen ? <Modal handleClouseModal={handleClouseModal}>Forms</Modal> : null}
                <List>
                  <Item>
                    <Button
                      onClick={() => {
                        window.scrollTo({ top: document.getElementById("portfolio").getBoundingClientRect().top - 30, behavior: "smooth" });
                      }}
                    >
                      portfolio
                    </Button>
                  </Item>
                  <Item>
                    <Button
                      onClick={() => {
                        window.scrollTo({ top: document.getElementById("history").getBoundingClientRect().top - 30, behavior: "smooth" });
                      }}
                    >
                      {language === "pl" ? "moja historia" : "my history"}
                    </Button>
                  </Item>
                  <Item>
                    <Button
                      onClick={() => {
                        window.scrollTo({ top: document.getElementById("contact").getBoundingClientRect().top - 30, behavior: "smooth" });
                      }}
                    >
                      {language === "pl" ? "kontakt" : "contact"}
                    </Button>
                  </Item>
                </List>
              </>
            ) : (
              <></>
            )}
          </Col>
          <Col xs={12} md={5}></Col>
        </Row>
      </Container>
    </Section>
  );
};

// export component
export default StartSectionComponent;
