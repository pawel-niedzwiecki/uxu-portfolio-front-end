// import plugin
import React, { useContext, useState, useEffect, useRef } from "react";

// import component
import { SquareConent } from "components/atoms/animation/index.animation";
import { Button } from "components/atoms/button/index.button";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

// import styled
import { Section, SelectBox, List, Header, BoxHistory, LogoHistory, ContentHistory, TitleHistory, DescriptionHistory } from "./style/styled";

// import context
import { DataBaseContext } from "providers/DataBaseProvider";
import { LanguageContext } from "providers/LanguageProvider";

// create component
const HistorySectionComponent = () => {
  const itemsRef = useRef([]);
  const { language } = useContext(LanguageContext);
  const { histories, error } = useContext(DataBaseContext);
  const [activeHistory, setActiveHistory] = useState("start");

  useEffect(() => {
    setActiveHistory("ok");
    itemsRef.current.forEach((item) => console.log(item));

    console.log(itemsRef);
  }, [itemsRef]);

  return (
    <Section id="history">
      <Container>
        <Row>
          <Col xs={12} md={3}>
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
                    {[1, 2, 3, 4, 5].map((x) => {
                      return (
                        <li key={x}>
                          <SquareConent height={4.5} />
                        </li>
                      );
                    })}
                  </>
                )}
              </List>
            </SelectBox>
          </Col>

          <Col xs={12} md={9}>
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
                [1, 2, 3, 4, 5].map((x) => {
                  return (
                    <Col xs={12} key={x}>
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
