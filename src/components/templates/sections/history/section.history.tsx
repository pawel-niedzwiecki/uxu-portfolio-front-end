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
  const elRef: any = useRef([]);
  const { language } = useContext(LanguageContext);
  const [sendRequest, setSendRequest] = useState(false);
  const [activeHistory, setActiveHistory] = useState(0);
  const [activeMobileSticky, setActiveMobileSticky] = useState(false);
  const { histories, setHistories, error, setError } = useContext(DataBaseContext);

  useEffect(() => {
    let allBox: any[] = [];
    let lastScroll: any = null;
    let allActiveBox: any[] = [];
    !!elRef.current.length && elRef.current.forEach((item: any) => allBox.push(document.getElementById(item.attributes.id.textContent)));
    document.addEventListener("scroll", () => {
      allActiveBox = [];
      if (!!allBox.length) {
        clearTimeout(lastScroll);
        lastScroll = setTimeout(() => {
          allBox.forEach((_, i) => {
            if (allBox[i].getBoundingClientRect().top - 200 < 0 && !!(i + 1 === allBox.length)) return null;
            allActiveBox.push(i);
          });
          setActiveHistory(allBox.length - allActiveBox.length);
        }, 10);
      }
    });
  }, [elRef, histories]);

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

  useEffect(() => {
    let switchSticky: any = null;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const sectionHistory = document.getElementById("history");

    window.addEventListener("scroll", (e) => {
      const y = sectionHistory.getBoundingClientRect().top;
      const x = sectionHistory.getBoundingClientRect().bottom;

      if (windowWidth < 767) {
        if (y - (windowHeight - 30) <= 0 && x - (windowHeight - 30) >= 0) {
          clearTimeout(switchSticky);
          setTimeout(() => {
            setActiveMobileSticky(true);
          }, 20);
        } else {
          clearTimeout(switchSticky);
          setTimeout(() => {
            setActiveMobileSticky(false);
          }, 20);
        }
      }
    });
  }, [activeMobileSticky]);

  return (
    <Section id="history">
      <Container>
        <Row>
          <Col xs={12} md={4} lg={3}>
            <SelectBox className={activeMobileSticky ? "sticky" : null}>
              <Header>
                {language === "pl" ? "Moja historia" : "My history"} <span>:</span>
              </Header>
              <List>
                {histories.length ? (
                  histories.map((item, i) => {
                    return (
                      <li key={item.id}>
                        <Button
                          className={`${activeHistory === i ? "active" : null} `}
                          onClick={() =>
                            window.scrollTo({
                              top: document.getElementById(item.id).getBoundingClientRect().top + window.pageYOffset + -79,
                              behavior: "smooth",
                            })
                          }
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
                        <BoxHistory id={item.id} ref={(el: any) => (elRef.current[i] = el)}>
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
