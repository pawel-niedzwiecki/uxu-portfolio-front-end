import { useContext, useState, useEffect } from "react";
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

import { useAppSelector } from "store/hooks";
import { TagType } from "utils/types/utils.types.tags";
import { LanguageContext } from "providers/providers.language";
import { PortfolioType } from "utils/types/utils.types.portfolio";

const PortfolioSectionComponent = () => {
  const store = useAppSelector((store) => store);
  const [select, setSelect] = useState("all");
  const { language } = useContext(LanguageContext);
  const [sendRequest, setSendRequest] = useState(false);
  const [activeMobileSticky, setActiveMobileSticky] = useState(false);

  useEffect(() => {
    const sectionHistory = document.getElementById("portfolio");
    window.addEventListener(
      "scroll",
      (e) => sectionHistory.getBoundingClientRect().top - (window.innerHeight - 100) <= 0 && !sendRequest && setSendRequest(true)
    );
    return () => {
      window.addEventListener("scroll", (e) => {
        const y = sectionHistory.getBoundingClientRect().top - (window.innerHeight - 100);
        y <= 0 && !sendRequest && setSendRequest(true);
      });
    };
  }, [activeMobileSticky, sendRequest, setSendRequest]);

  useEffect(() => {
    let switchSticky: any = null;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const sectionHistory = document.getElementById("portfolio");

    window.addEventListener("scroll", (_e) => {
      const y = sectionHistory.getBoundingClientRect().top;
      const x = sectionHistory.getBoundingClientRect().bottom;

      if (windowWidth < 767) {
        if (y - (windowHeight - 50) <= 0 && x - (windowHeight - 30) >= 0) {
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
    <Section id="portfolio">
      <Container>
        <Row>
          <Col xs={12} md={4} lg={3}>
            <SelectBox className={activeMobileSticky ? "sticky" : null}>
              <Header>
                Portfolio <span>:</span>
              </Header>
              <List>
                {store?.tags?.tags?.data?.length ? (
                  <>
                    <li>
                      <Button
                        className={select === "all" && "active"}
                        onClick={() => {
                          setSelect("all");
                          window.scrollTo({
                            top: document.getElementById("portfolio").getBoundingClientRect().top + window.pageYOffset + -30,
                            behavior: "smooth",
                          });
                        }}
                      >
                        {language === "pl" ? "Wszystko" : "All "}
                      </Button>
                    </li>

                    {store.tags.tags.data.map((tag: TagType) => (
                      <li key={tag.id}>
                        <Button
                          className={select === tag.Name && "active"}
                          onClick={() => {
                            setSelect(tag.Name);
                            window.scrollTo({
                              top: document.getElementById("portfolio").getBoundingClientRect().top + window.pageYOffset + -30,
                              behavior: "smooth",
                            });
                          }}
                        >
                          {tag.Name}
                        </Button>
                      </li>
                    ))}
                  </>
                ) : store.tags.status === "error" ? (
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
              {!!store?.portfolio?.portfolio?.data?.length ? (
                store.portfolio.portfolio.data.map((item: PortfolioType): JSX.Element | JSX.Element[] => {
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
              ) : store.portfolio.status === "error" ? (
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
                [...new Array(10)].map((x, i): JSX.Element | JSX.Element[] => (
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
