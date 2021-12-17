import React, { useContext, useState, useEffect, useRef } from "react";
import { callToApi } from "function/hooks.callAPI";
import { Button } from "components/atoms/button/component.button";
import { SquareConent } from "components/atoms/animation/index.comonent.animation";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import {
  Section,
  SelectBox,
  List,
  Header,
  BoxHistory,
  LogoHistory,
  ContentHistory,
  TitleHistory,
  DescriptionHistory,
} from "./section.history.style";
import { DataBaseContext } from "providers/providers.dataBase";
import { LanguageContext } from "providers/providers.language";

const HistorySectionComponent = () => {
  const itemsRef = useRef([]);
  const { language } = useContext(LanguageContext);
  const [sendRequest, setSendRequest] = useState(false);
  const [activeHistory, setActiveHistory] = useState("start");
  const { histories, setHistories, error, setError } = useContext(DataBaseContext);

  useEffect(() => {
    setActiveHistory("ok");
    itemsRef.current.forEach((item) => null);
  }, [itemsRef]);

  useEffect(() => {
    const sectionHistory = document.getElementById("history");
    window.addEventListener(
      "scroll",
      (e) => sectionHistory.getBoundingClientRect().top - (window.innerHeight - 100) <= 0 && !sendRequest && setSendRequest(true)
    );

    return () =>
      window.addEventListener(
        "scroll",
        (e) => sectionHistory.getBoundingClientRect().top - (window.innerHeight - 100) <= 0 && !sendRequest && setSendRequest(true)
      );
  }, [sendRequest, setSendRequest]);

  useEffect(() => {
    const phoneAPI = new callToApi({ error, setError });
    sendRequest &&
      phoneAPI.call({
        url: `https://uxu-portfolio.herokuapp.com/histories?_locale=${language}`,
        type: "tags",
        setData: setHistories,
      });
  }, [sendRequest, setHistories, language, error, setError]);

  return (
    <Section id="history">
      <Container>
        <Row>
          <Col xs={12} md={4} lg={3}>
            <SelectBox>
              <Header style={{ paddingBottom: "2rem" }}>{language === "pl" ? "Moja historia" : "My history"}</Header>
              <List>
                {histories.length ? (
                  histories.map((item) => {
                    return (
                      <li key={item.id}>
                        <Button
                          className={`${item.HistoryTitle === activeHistory ? "active" : ""} `}
                          onClick={() => {
                            console.log(item.HistoryTitle);
                          }}
                        >
                          {item.HistoryTitle}
                        </Button>
                      </li>
                    );
                  })
                ) : error.histories ? (
                  language === "pl" ? (
                    <li>Mam problem z pobraniem danych, spróbuj za godzinę</li>
                  ) : (
                    <li>I have a problem with download data, try in 1 hour</li>
                  )
                ) : (
                  <>
                    {[...new Array(5)].map((x, i) => {
                      return (
                        <li key={i}>
                          <SquareConent height={4.5} />
                        </li>
                      );
                    })}
                  </>
                )}
              </List>
            </SelectBox>
          </Col>

          <Col xs={12} md={8} lg={9}>
            <Row>
              {histories.length ? (
                <>
                  {histories.map((item, i) => {
                    return (
                      <Col xs={12} key={item.id}>
                        <BoxHistory ref={(el) => (itemsRef.current[i] = el)}>
                          <LogoHistory>
                            <img src={item.HistoryLogo.url} alt={item.HistoryTitle} />
                          </LogoHistory>
                          <ContentHistory>
                            <TitleHistory>{item.HistoryTitle}</TitleHistory>
                            <DescriptionHistory>{item.HistoryDescription}</DescriptionHistory>
                          </ContentHistory>
                        </BoxHistory>
                      </Col>
                    );
                  })}
                </>
              ) : (
                [...new Array(5)].map((x, i) => {
                  return (
                    <Col xs={12} key={i}>
                      <SquareConent height={30} />
                    </Col>
                  );
                })
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

// export component
export default HistorySectionComponent;