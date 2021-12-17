import Modal from "react-modal";
import useModal from "hooks/hooks.modal";
import face from "assets/img/face.png";
import { useForm } from "react-hook-form";
import { LanguageContext } from "providers/providers.language";
import React, { useState, useEffect, useContext } from "react";
import { ReactComponent as Closed } from "assets/icon/closed.svg";
import { Input, CheckBox } from "components/molecules/form/index.form";
import { emailRegex, telRegex, nameRegex } from "assets/regex/index.regex";
import { SendEmailAPIProps, requestOptionsProps } from "./section.start.type";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SquareConent, TextScramble } from "components/atoms/animation/index.comonent.animation";
import { Button, ButtonCyrlic, ButtonSubmit } from "components/atoms/button/component.button";
import { Section, H1, H2, List, Item, ModdalTitle, ModalContent, ModdalDescription, Form } from "./section.start.style";

const StartSectionComponent = () => {
  const [send, setSend] = useState(false);
  const [hello, setHello] = useState(false);
  const { translations } = useContext(LanguageContext);
  const { content, link, modal } = translations.section.start;
  const { isOpen, handleOpenModal, handleClouseModal } = useModal();
  const { name, phone, email, clausureRodo, buttonSend } = translations.forms;

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const myHeaders = new Headers();
  const settings = { method: "PUT" };
  const urlencoded = new URLSearchParams();
  const url = "https://comunicatorforclient.herokuapp.com/api/v1/email";
  const helloChange = (changeSwitch: boolean) => setHello(changeSwitch);
  const scrollToEl = (id: string) => {
    const yOffset = -30;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const sendEmailAPI = async ({ url, settings = { method: "GET" }, data }: SendEmailAPIProps) => {
    for (const property in data) urlencoded.append(property, data[property]);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const requestOptions: requestOptionsProps = {
      method: settings.method,
      headers: myHeaders,
      body: urlencoded,
    };

    await fetch(url, requestOptions)
      .then((res) => {
        if (!(res.status < 200 || res.status >= 300)) return res.json();
      })
      .then((result) => {
        if (!(result.status < 200 || result.status >= 300)) {
          alert(`Hej ${JSON.parse(data.message).nameFistContact}! w ciągu 24h spodziewaj sie kontaktu ze mną ! :)`);
          setSend(false);
          reset();
          return handleClouseModal();
        }
      })
      .catch((error) => {
        alert("Ups... coś poszło nie tak :( Napisz do mnie bezpośrednio na ,,hello@uxu.pl'' aby dłuzej nie czekać na naprawę błędu...");
        reset();
        return handleClouseModal();
      });
  };

  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden");
    !isOpen && (document.body.style.overflow = "unset");
  }, [isOpen]);

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
                  <H1>
                    {content.h1} <br /> <TextScramble phrases={["JavaScript", "React.js", "Gatsby.js", "Nest.js", "Next.js", "Node.js", "MongoDB", "PostgreSQL"]} option={{ time: 3000 }} />
                  </H1>
                  <Button onClick={handleOpenModal} className="btn">
                    {modal.button}
                  </Button>
                  <List>
                    <Item>
                      <Button onClick={() => scrollToEl("portfolio")}>{link.portfolio}</Button>
                    </Item>
                    <Item>
                      <Button onClick={() => scrollToEl("history")}>{link.history}</Button>
                    </Item>
                    <Item>
                      <Button onClick={() => scrollToEl("contact")}>{link.contact}</Button>
                    </Item>
                  </List>
                </>
              )}
            </Col>
            <Col xs={12} md={5}></Col>
          </Row>
        </Container>
      </Section>

      <Modal ariaHideApp={false} isOpen={isOpen} className="modal" overlayClassName="modalWrapper">
        <div className="modalHeader">
          <ButtonCyrlic onClick={handleClouseModal}>
            <Closed />
          </ButtonCyrlic>
        </div>
        <div className="modalContent">
          <ModalContent>
            <ModdalTitle>{modal.h1}</ModdalTitle>
            <ModdalDescription>{modal.h2}</ModdalDescription>
            {send ? (
              <>
                <SquareConent height={4} />
                <SquareConent height={4} />
                <SquareConent height={4} />
                <SquareConent height={4} />
              </>
            ) : (
              <Form
                onSubmit={handleSubmit((d) => {
                  setSend(true);
                  sendEmailAPI({
                    url,
                    settings,
                    data: {
                      domian: "uxu.pl",
                      emailTo: "hello@uxu.pl",
                      emailFrom: d.emailFistContact,
                      message: JSON.stringify(d),
                    },
                  });
                })}
              >
                <Input id="nameFistContact" type="text" pattern={nameRegex} error={errors.nameFistContact} label={name} register={register} required />
                <Input id="phoneFistContact" type="tel" pattern={telRegex} error={errors.phoneFistContact} label={phone} register={register} required />
                <Input id="emailFistContact" type="email" pattern={emailRegex} error={errors.emailFistContact} label={email} register={register} required />

                <CheckBox id="privacyPolicyFistContact" pattern={emailRegex} error={errors.privacyPolicyFistContact} label={clausureRodo} register={register} required />
                <ButtonSubmit style={{ marginTop: "3rem" }}>{buttonSend}</ButtonSubmit>
              </Form>
            )}
          </ModalContent>
        </div>
      </Modal>
    </>
  );
};

export default StartSectionComponent;
