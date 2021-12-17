import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { SquareConent, MovingElement } from "components/atoms/animation/index.comonent.animation";
import { emailRegex, telRegex, nameRegex } from "assets/regex/index.regex";
import { Input, CheckBox, TextArea } from "components/molecules/form/index.form";
import { ButtonOutLink, ButtonSubmit } from "components/atoms/button/component.button";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, SelectBox, List, Header, BoxContact, Title, Form, BoxAnimation, SharpCircle, SharpSquare, SharpTriangle } from "./section.contact.styled";
import { LanguageContext } from "providers/providers.language";
import noise from "assets/icon/noise.svg";
import { ReactComponent as GitHub } from "assets/icon/github.svg";
import { ReactComponent as Linkedin } from "assets/icon/linkedin.svg";
import { ReactComponent as Instagram } from "assets/icon/instagram.svg";
import { ReactComponent as Square } from "assets/icon/square.svg";

const ContactSectionComponent = () => {
  const { translations } = useContext(LanguageContext);
  const [send, setSend] = useState(false);
  const { name, phone, email, message, clausureRodo, buttonSend } = translations.forms;
  const { title } = translations.section.contact;

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const url = "https://comunicatorforclient.herokuapp.com/api/v1/email";
  const settings = { method: "PUT" };

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
          alert(`Hej ${JSON.parse(data.message).nameContact}! w ciągu 24h spodziewaj sie kontaktu ze mną ! :)`);
          setSend(false);
          return reset();
        }
      })
      .catch((error) => {
        alert("Ups... coś poszło nie tak :( Napisz do mnie bezpośrednio na ,,hello@uxu.pl'' aby dłuzej nie czekać na naprawę błędu...");
        return reset();
      });
  };

  return (
    <Section id="contact">
      <Container>
        <Row>
          <Col xs={12} md={4} lg={3}>
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

          <Col xs={12} md={8} lg={5} style={{ zIndex: 1 }}>
            <BoxContact>
              <Title>{title}</Title>
              {send ? (
                <>
                  <SquareConent height={4} />
                  <SquareConent height={4} />
                  <SquareConent height={4} />
                  <SquareConent height={8} />
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
                        emailFrom: d.emailContact,
                        message: JSON.stringify(d),
                      },
                    });
                  })}
                >
                  <Input id="nameContact" type="text" pattern={nameRegex} error={errors.nameContact} label={name} register={register} required />
                  <Input id="emailContact" type="email" pattern={emailRegex} error={errors.emailContact} label={email} register={register} required />
                  <Input id="telContact" type="tel" pattern={telRegex} error={errors.telContact} label={phone} register={register} required />
                  <TextArea id="descriptionContact" pattern={nameRegex} error={errors.descriptionContact} label={message} register={register} required />
                  <CheckBox id="privacyPolicyContact" pattern={emailRegex} error={errors.privacyPolicyContact} label={clausureRodo} register={register} required />
                  <ButtonSubmit style={{ marginTop: "3rem" }}>{buttonSend}</ButtonSubmit>
                </Form>
              )}
            </BoxContact>
          </Col>
        </Row>
        <BoxAnimation>
          <MovingElement>
            <SharpCircle bg={noise} className="movieEL">
              <div className="isolate">
                <div className="ball-shadow"></div>
                <div className="ball-light"></div>
              </div>
            </SharpCircle>
            <SharpSquare bg={noise} className="movieEL">
              <div className="isolate">
                <div className="ball-shadow"></div>
                <div className="ball-light"></div>
              </div>
            </SharpSquare>
            <SharpTriangle bg={noise} className="movieEL">
              <div className="isolate">
                <div className="ball-shadow"></div>
                <div className="ball-light"></div>
              </div>
            </SharpTriangle>

            <Square style={{ width: "30rem" }} />
            <Square style={{ width: "30rem", marginLeft: "4.2rem", top: "-2px", position: "relative" }} />
          </MovingElement>
        </BoxAnimation>
      </Container>
    </Section>
  );
};

// export component
export default ContactSectionComponent;
