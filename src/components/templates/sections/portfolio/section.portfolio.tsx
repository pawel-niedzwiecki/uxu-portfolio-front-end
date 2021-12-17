import React, { useContext, useState, useEffect } from "react";
import useCallToApi from "hooks/hooks.callAPI";
import { ReactComponent as Circle } from "assets/icon/circle.svg";
import { SquareConent } from "components/atoms/animation/index.comonent.animation";
import { Button, ButtonOutLink } from "components/atoms/button/component.button";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import {
  Section,
  SelectBox,
  List,
  Header,
  FlipBox,
  FlipBoxInner,
  FlipBoxFront,
  FlipBoxBack,
  FlipBoxHeader,
  FlipBoxList,
  FlipBoxListItem,
  FlipBoxButton,
} from "./section.portfolio.style";
import { DataBaseContext } from "providers/providers.dataBase";
import { LanguageContext } from "providers/providers.language";

const PortfolioSectionComponent = () => {
  const { language } = useContext(LanguageContext);
  const [sendRequest, setSendRequest] = useState(false);
  const [filtrPortfolio, setFiltrPortfolio] = useState("all");
  const { portfolio, setPortfolio, tags, setTags, error, setError } = useContext(DataBaseContext);
  const { callToApi } = useCallToApi({ error, setError });
  const [displayPortfolio, setDisplayPortfolio] = useState(portfolio);

  useEffect(() => {
    let selectPortfolio: any = [];
    if (!portfolio.length || filtrPortfolio === "all") return setDisplayPortfolio(portfolio);
    portfolio.forEach(
      (item: { id: string; tags: []; PortfolioGitHub: string; PortfolioURL: string; ProjectName: string; locale: string }) => {
        item.tags.filter((el: { Name: string }) => {
          return el.Name === filtrPortfolio;
        }).length && selectPortfolio.push(item);
      }
    );
    setDisplayPortfolio(selectPortfolio);
  }, [portfolio, filtrPortfolio]);

  useEffect(() => {
    const sectionHistory = document.getElementById("portfolio");
    window.addEventListener("scroll", (e) => {
      const y = sectionHistory.getBoundingClientRect().top - (window.innerHeight - 100);
      y <= 0 && !sendRequest && setSendRequest(true);
    });

    return () => {
      window.addEventListener("scroll", (e) => {
        const y = sectionHistory.getBoundingClientRect().top - (window.innerHeight - 100);
        y <= 0 && !sendRequest && setSendRequest(true);
      });
    };
  }, [sendRequest, setSendRequest]);

  useEffect(() => {
    sendRequest && callToApi({ url: "https://uxu-portfolio.herokuapp.com/tags", type: "tags", setData: setTags });
    sendRequest && callToApi({ url: "https://uxu-portfolio.herokuapp.com/portfolios", type: "portfolio", setData: setPortfolio });
  }, [callToApi, setPortfolio, sendRequest, setTags]);

  return (
    <Section id="portfolio">
      <Container>
        <Row>
          <Col xs={12} md={4} lg={3}>
            <SelectBox>
              <Header style={{ paddingBottom: "2rem" }}>Portfolio</Header>
              <List>
                {tags.length ? (
                  <>
                    <li>
                      <Button
                        className={filtrPortfolio === "all" && "active"}
                        onClick={() => {
                          setFiltrPortfolio("all");
                        }}
                      >
                        {language === "pl" ? "Wszystko" : "All "}
                      </Button>
                    </li>

                    {tags.map((tag) => (
                      <li key={tag.id}>
                        <Button
                          className={filtrPortfolio === tag.Name && "active"}
                          onClick={() => {
                            setFiltrPortfolio(tag.Name);
                          }}
                        >
                          {tag.Name}
                        </Button>
                      </li>
                    ))}
                  </>
                ) : error.tags ? (
                  language === "pl" ? (
                    <li>Mam problem z pobraniem danych, spróbuj za godzinę</li>
                  ) : (
                    <li>I have a problem with download data, try in 1 hour</li>
                  )
                ) : (
                  [...new Array(5)].map((x, i) => (
                    <li key={i}>
                      <SquareConent typ="dark" height={4.5} />
                    </li>
                  ))
                )}
              </List>
            </SelectBox>
          </Col>
          <Col xs={12} md={8} lg={9} style={{ zIndex: 1 }}>
            <Row>
              {!!displayPortfolio.length ? (
                displayPortfolio.map((item) => {
                  return (
                    <Col xs={12} md={6} lg={4} className="col" key={item.id}>
                      <FlipBox>
                        <FlipBoxInner>
                          <FlipBoxFront>
                            <Header>{item.ProjectName}</Header>
                          </FlipBoxFront>
                          <FlipBoxBack>
                            <FlipBoxHeader>{language === "pl" ? "technologie" : "technology"}</FlipBoxHeader>
                            <FlipBoxList>
                              {item.tags.map((tag: any) => {
                                return (
                                  <FlipBoxListItem key={tag.id}>
                                    <span>#</span>
                                    {tag.Name}
                                  </FlipBoxListItem>
                                );
                              })}
                            </FlipBoxList>

                            <FlipBoxButton>
                              {item.PortfolioURL && <ButtonOutLink href={item.PortfolioURL}>Online</ButtonOutLink>}
                              {item.PortfolioGitHub && <ButtonOutLink href={item.PortfolioGitHub}>GitHub</ButtonOutLink>}
                            </FlipBoxButton>
                          </FlipBoxBack>
                        </FlipBoxInner>
                      </FlipBox>
                    </Col>
                  );
                })
              ) : error.portfolio ? (
                language === "pl" ? (
                  <Col xs={12} className="col">
                    Mam problem z pobraniem danych, spróbuj za godzinę
                  </Col>
                ) : (
                  <Col xs={12} className="col">
                    I have a problem with download data, try in 1 hour
                  </Col>
                )
              ) : (
                [...new Array(10)].map((x, i) => (
                  <Col xs={12} md={6} lg={4} className="col" key={i}>
                    <SquareConent height={20} />
                  </Col>
                ))
              )}
            </Row>
          </Col>
        </Row>
        <Circle className="circle" />
      </Container>
    </Section>
  );
};

// export component
export default PortfolioSectionComponent;
