import React, { useState, useEffect, useContext } from "react";
import useModal from "hooks/useModal";
import face from "assets/img/face.png";
import { LanguageContext } from "providers/LanguageProvider";
import { Button, ButtonSubmit } from "components/atoms/button/index.button";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { InputText, InputEmail, InputTel, CheckBoxClassic } from "components/molecules/form/index.form";
import { Section, H1, H2, List, Item, ModalContent, ModdalTitle, ModdalDescription, Form } from "./index.section.start.style";

const StartSectionComponent = () => {
  const { Modal, isOpen, handleOpenModal, handleClouseModal } = useModal();
  const { language, translations } = useContext(LanguageContext);
  const { content, link, modal } = translations.section.start;
  const [hello, setHello] = useState(false);

  const helloChange = (changeSwitch: boolean) => {
    setHello(changeSwitch);
  };

  const scrollToEl = (id: string) => {
    window.scrollTo({ top: document.getElementById(id).getBoundingClientRect().top - 30, behavior: "smooth" });
  };

  useEffect(() => {
    helloChange(true);
  }, []);

  return (
    <>
      <Section id="start">
        <Container className="bg" style={{ backgroundImage: `url(${face})` }}>
          <Row>
            <Col xs={12} md={7} className="col">
              {hello && (
                <>
                  <H2>{content.h2}</H2>
                  <H1>{content.h1}</H1>
                  <Button onClick={handleOpenModal} className="btn">
                    {modal.button}
                  </Button>
                  <List>
                    <Item>
                      <Button
                        onClick={() => {
                          scrollToEl("portfolio");
                        }}
                      >
                        {link.portfolio}
                      </Button>
                    </Item>
                    <Item>
                      <Button
                        onClick={() => {
                          scrollToEl("history");
                        }}
                      >
                        {link.history}
                      </Button>
                    </Item>
                    <Item>
                      <Button
                        onClick={() => {
                          scrollToEl("contact");
                        }}
                      >
                        {link.contact}
                      </Button>
                    </Item>
                  </List>
                </>
              )}
            </Col>
            <Col xs={12} md={5}></Col>
          </Row>
        </Container>
      </Section>

      {isOpen ? (
        <Modal handleClouseModal={handleClouseModal}>
          <ModalContent>
            <ModdalTitle>{modal.h1}</ModdalTitle>
            <ModdalDescription>{modal.h2}</ModdalDescription>
            <Form>
              <InputText id="nameYour">Imię</InputText>
              <InputEmail id="emailYour">email</InputEmail>
              <InputTel id="telYour">email</InputTel>
              <CheckBoxClassic id="ches">
                {language === "pl"
                  ? "PL Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"
                  : "EN Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam"}
              </CheckBoxClassic>
              <ButtonSubmit style={{ marginTop: "3rem" }}>{language === "pl" ? "Wyślij" : "Send"}</ButtonSubmit>
            </Form>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
};

export default StartSectionComponent;
