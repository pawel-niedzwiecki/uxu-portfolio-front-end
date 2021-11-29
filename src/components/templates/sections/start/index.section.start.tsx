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
  const { translations } = useContext(LanguageContext);
  const { content, link, modal } = translations.section.start;
  const { name, phone, email, clausureRodo, buttonSend } = translations.forms;
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
            <Form name="conversation" method="POST" data-netlify="true">
              <InputText id="nameYourFirstMsg">{name}</InputText>
              <InputEmail id="emailYourFirstMsg">{email}</InputEmail>
              <InputTel id="telYourFirstMsg">{phone}</InputTel>
              <CheckBoxClassic id="ches">{clausureRodo}</CheckBoxClassic>
              <ButtonSubmit style={{ marginTop: "3rem" }} onClick={(e: any) => e.preventDefault()}>
                {buttonSend}
              </ButtonSubmit>
            </Form>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
};

export default StartSectionComponent;
