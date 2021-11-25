import React, { useContext, useState, useEffect } from "react";
import { ReactComponent as Circle } from "assets/icon/circle.svg";
import { SquareConent } from "components/atoms/animation/index.animation";
import { Button, ButtonOutLink } from "components/atoms/button/index.button";
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
} from "./index.section.portfolio.style";
import { DataBaseContext } from "providers/DataBaseProvider";
import { LanguageContext } from "providers/LanguageProvider";

// create component
const PortfolioSectionComponent = () => {
  const [filtrPortfolio, setFiltrPortfolio] = useState("all");
  const { portfolio, tags, error } = useContext(DataBaseContext);
  const [displayPortfolio, setDisplayPortfolio] = useState(portfolio);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    let selectPortfolio: any = [];
    if (!portfolio.length || filtrPortfolio === "all") return setDisplayPortfolio(portfolio);
    portfolio.forEach((item: { id: string; tags: []; PortfolioGitHub: string; PortfolioURL: string; ProjectName: string; locale: string }) => {
      item.tags.filter((el: { Name: string }) => {
        return el.Name === filtrPortfolio;
      }).length && selectPortfolio.push(item);
    });
    setDisplayPortfolio(selectPortfolio);
  }, [portfolio, filtrPortfolio]);

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
