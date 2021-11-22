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
  top: 7.9rem;
  width: 100%;
  margin-top: 1rem;
  position: -webkit-sticky;
  position: sticky;
  border-radius: 0.3em;
  padding: ${({ theme }) => theme.break.big};
  background-color: ${({ theme }) => theme.blue};

  button {
    border: none;
    padding: 1rem 0;
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

export const List = styled.ul`
  .loadContent {
    width: 100%;
    height: 45px;
    display: block;
    overflow: hidden;
    position: relative;
    padding: 1rem 0;

    &::after {
      width: 100%;
      content: "";
      height: 100%;
      display: block;
      position: absolute;
      animation-duration: 1s;
      animation-name: loadContent;
      animation-iteration-count: infinite;
      background: linear-gradient(90deg, rgba(10, 18, 42, 1) 10%, rgba(4, 8, 21, 1) 50%, rgba(10, 18, 42, 1) 90%);
    }
  }

  @keyframes loadContent {
    to {
      left: 90%;
    }

    from {
      left: -90%;
    }
  }
`;

export const Header = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

export const BoxHistory = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  position: relative;
  border-radius: 0.3rem;
  margin: ${({ theme }) => theme.break.main} 0;
  background: linear-gradient(90deg, rgba(25, 32, 55, 1) 20%, rgba(10, 18, 42, 1) 100%);
`;
export const LogoHistory = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    display: block;
    width: 60%;
    max-width: 100%;
  }
`;
export const ContentHistory = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 30rem);
  align-items: center;
  justify-content: center;
`;
export const TitleHistory = styled.h2`
  width: 100%;
  display: block;
  font-size: 3rem;
  text-align: left;
  font-weight: bold;
  padding-bottom: ${({ theme }) => theme.break.main};
`;
export const DescriptionHistory = styled.div`
  width: 100%;
  display: block;
  padding-top: ${({ theme }) => theme.break.main};
  padding-right: ${({ theme }) => theme.break.main};
`;
