import React, { useState, useEffect, useContext, useReducer } from "react";
import useModal from "hooks/useModal";
import face from "assets/img/face.png";
import { LanguageContext } from "providers/LanguageProvider";
import { Button, ButtonSubmit } from "components/atoms/button/index.button";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { InputText, InputEmail, InputTel, CheckBoxClassic } from "components/molecules/form/index.form";
import { Section, H1, H2, List, Item, ModalContent, ModdalTitle, ModdalDescription, Form } from "./index.section.start.style";

const initialStateInput = {
  nameYourFirstMsg: false,
  emailYourFirstMsg: false,
  telYourFirstMsg: false,
  privacyPolicyFirstContact: false,
};

function reducerInput(state: any, action: any) {
  switch (action.type) {
    case "changeValue":
      return { ...state, nameYourFirstMsg: action.value };
    case "reset":
      return { ...initialStateInput };
  }
}

const StartSectionComponent = () => {
  const { Modal, isOpen, handleOpenModal, handleClouseModal } = useModal();
  const { translations } = useContext(LanguageContext);
  const { content, link, modal } = translations.section.start;
  const { name, phone, email, clausureRodo, buttonSend } = translations.forms;
  const [hello, setHello] = useState(false);
  const [stateInputs, dispatchInputs] = useReducer(reducerInput, initialStateInput);
  const helloChange = (changeSwitch: boolean) => {
    setHello(changeSwitch);
  };

  const scrollToEl = (id: string) => {
    window.scrollTo({ top: document.getElementById(id).getBoundingClientRect().top - 30, behavior: "smooth" });
  };

  type SendEmailAPIProps = {
    url: string;
    settings: {
      method: string;
    };
    data: any;
  };

  const sendEmailAPI = async ({ url, settings = { method: "GET" }, data }: SendEmailAPIProps) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    for (const property in data) {
      urlencoded.append(property, data[property]);
    }

    type requestOptionsProps = {
      method: string;
      headers: any;
      body: any;
    };

    const requestOptions: requestOptionsProps = {
      method: settings.method,
      headers: myHeaders,
      body: urlencoded,
    };

    await fetch("http://localhost:4000/api/v1/email", requestOptions)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => err);
  };

  console.log(stateInputs);

  useEffect(() => {
    helloChange(true);
    const url = "http://localhost:4000/api/v1/email";
    const settings = { method: "PUT" };
    const data = { domian: "uxu.pl", emailTo: "hello@o2.pl", emailFrom: "kupa@o2.pl", message: "pk" };

    console.log(sendEmailAPI({ url, settings, data }));
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
            <Form
              method="POST"
              onSubmit={(e: any) => {
                e.preventDefault();
                console.log(e.target[0]);
              }}
            >
              <InputText id="nameYourFirstMsg" validate={dispatchInputs}>
                {name}
              </InputText>
              <InputEmail id="emailYourFirstMsg" validate={dispatchInputs}>
                {email}
              </InputEmail>
              <InputTel id="telYourFirstMsg" validate={dispatchInputs}>
                {phone}
              </InputTel>
              <CheckBoxClassic id="privacyPolicyFirstContact">{clausureRodo}</CheckBoxClassic>
              <ButtonSubmit style={{ marginTop: "3rem" }}>{buttonSend}</ButtonSubmit>
            </Form>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
};

export default StartSectionComponent;
