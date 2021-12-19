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
  left: 0;
  z-index: 999;
  display: flex;
  bottom: -15rem;
  position: fixed;
  margin-top: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  transition: all 0.3s;
  width: calc(100% + 2rem);
  padding: ${({ theme }) => theme.break.main};
  background-color: ${({ theme }) => theme.blue};

  @media all and (max-width: 767px) {
    &&.sticky {
      left: 0;
      bottom: -1rem;
      position: fixed;
    }
  }

  @media all and (min-width: 768px) {
    top: 7rem;
    left: auto;
    z-index: 1;
    width: 100%;
    bottom: auto;
    display: block;
    position: sticky;
    align-items: unset;
    border-radius: 0.3em;
    padding: ${({ theme }) => theme.break.big};
  }

  @media all and (min-width: 1024px) {
    top: 8rem;
  }

  button {
    padding: 0;
    width: 100%;
    border: none;
    display: block;
    text-align: left;
    position: relative;
    font-weight: normal;
    white-space: nowrap;
    border-radius: inherit;

    @media all and (min-width: 780px) {
      padding: 1rem 2rem;
      border-radius: 0.3rem;
    }

    &.active {
      color: ${({ theme }) => theme.white};

      @media all and (min-width: 780px) {
        background: ${({ theme }) => theme.blueDark} !important;
      }
    }

    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme.white};
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  margin: 0 1rem;
  overflow: scroll;
  padding: 2rem 0rem;
  position: relative;

  @media all and (min-width: 768px) {
    margin: 0;
    left: -2rem;
    overflow: auto;
    display: block;
    width: calc(100% + 4rem);
  }

  li {
    padding: 0 2rem;

    @media all and (min-width: 768px) {
      padding-left: 0;
    }
  }
`;

export const Header = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  white-space: nowrap;

  @media all and (min-width: 768px) {
    font-size: 3rem;
    padding-bottom: "2rem";
  }
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
