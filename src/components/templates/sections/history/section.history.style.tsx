// import plugin
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  overflow: unset;
  position: relative;
  padding: ${({ theme }) => theme.break.big} 0;

  .col {
    padding: 1rem;
  }
`;

export const SelectBox = styled.div`
  top: 7rem;
  width: 100%;
  margin-top: 1rem;
  position: sticky;
  margin-bottom: 1rem;
  border-radius: 0.3em;
  position: -webkit-sticky;
  padding: ${({ theme }) => theme.break.big};
  background-color: ${({ theme }) => theme.blue};

  @media all and (min-width: 1024px) {
    top: 8rem;
  }

  button {
    border: none;
    padding: 1rem 0;
    text-align: left;
    font-weight: normal;
    border-radius: inherit;

    &.active {
      color: ${({ theme }) => theme.white};
    }

    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme.white};
    }
  }
`;

export const List = styled.ul``;

export const Header = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

export const BoxHistory = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  border-radius: 0.3rem;
  margin: ${({ theme }) => theme.break.main} 0;
  background: linear-gradient(90deg, rgba(25, 32, 55, 1) 20%, rgba(10, 18, 42, 1) 100%);

  @media all and (min-width: 1024px) {
    height: 30rem;
  }
`;

export const LogoHistory = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: var(--uxu-pl-break-bigger) var(--uxu-pl-break-main) 0 var(--uxu-pl-break-main);

  @media all and (min-width: 1024px) {
    width: 30rem;
  }

  img {
    width: 60%;
    display: block;
    max-width: 100%;
  }
`;

export const ContentHistory = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: var(--uxu-pl-break-bigger) var(--uxu-pl-break-main);

  @media all and (min-width: 768px) {
    padding: var(--uxu-pl-break-bigger);
  }

  @media all and (min-width: 1024px) {
    width: calc(100% - 30rem);
  }
`;

export const TitleHistory = styled.h2`
  width: 100%;
  display: block;
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  padding-bottom: ${({ theme }) => theme.break.main};

  @media all and (min-width: 1024px) {
    text-align: left;
  }
`;

export const DescriptionHistory = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  padding-top: ${({ theme }) => theme.break.main};
  padding-right: ${({ theme }) => theme.break.main};

  @media all and (min-width: 1024px) {
    text-align: left;
  }
`;
