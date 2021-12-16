import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import useModal from "hooks/useModal";
import face from "assets/img/face.png";
import { SquareConent, TextScramble } from "components/atoms/animation/index.animation";
import { emailRegex, telRegex, nameRegex } from "assets/regex/index.regex";
import { ReactComponent as Closed } from "assets/icon/closed.svg";
import { Input, CheckBox } from "components/molecules/form/index.form";
import { LanguageContext } from "providers/LanguageProvider";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Button, ButtonCyrlic, ButtonSubmit } from "components/atoms/button/index.button";
import { Section, H1, H2, List, Item, ModdalTitle, ModalContent, ModdalDescription, Form } from "./index.section.start.style";

const StartSectionComponent = () => {
  const { translations } = useContext(LanguageContext);
  const [send, setSend] = useState(false);
  const { content, link, modal } = translations.section.start;
  const { isOpen, handleOpenModal, handleClouseModal } = useModal();

  const { name, phone, email, clausureRodo, buttonSend } = translations.forms;
  const [hello, setHello] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const url = "https://comunicatorforclient.herokuapp.com/api/v1/email";
  const settings = { method: "PUT" };

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
                    {content.h1} <br /> <TextScramble phrases={["JavaScript", "React.js", "Gatsby.js", "Huj wam w dupe", "Kurwa mać"]} option={{ time: 3000 }} />
                  </H1>

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
