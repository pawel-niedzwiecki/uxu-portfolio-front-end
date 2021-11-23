// import plugin
import React, { useState, useEffect, useContext } from "react";

// import component
import { Button, ButtonSubmit } from "components/atoms/button/index.button";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { InputText, InputEmail, InputTel, CheckBoxClassic } from "components/molecules/form/index.form";

// import styled
import { Section, H1, H2, List, Item, ModalContent, ModdalTitle, ModdalDescription, Form } from "./style/styled";

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
                {isOpen ? (
                  <Modal handleClouseModal={handleClouseModal}>
                    <ModalContent>
                      <ModdalTitle>Hej! przedstaw się</ModdalTitle>
                      <ModdalDescription>Ponieważ fajne projekty zaczynają się od tej wiadomosći.</ModdalDescription>
                      <Form>
                        <InputText id="nameYour">Imię</InputText>
                        <InputEmail id="emailYour">email</InputEmail>
                        <InputTel id="telYour">email</InputTel>
                        <CheckBoxClassic id="ches">
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                          erat, sed diam
                        </CheckBoxClassic>
                        <ButtonSubmit style={{ marginTop: "3rem" }}>Wyślij</ButtonSubmit>
                      </Form>
                    </ModalContent>
                  </Modal>
                ) : null}
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
