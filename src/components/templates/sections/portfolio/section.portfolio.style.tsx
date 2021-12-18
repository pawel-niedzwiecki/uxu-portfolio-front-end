import styled, { css } from "styled-components";

export const Section = styled.section`
  width: 100%;
  overflow: unset;
  position: relative;
  padding: ${({ theme }) => theme.break.big} 0;

  .col {
    padding: 1rem;
  }

  .circle {
    display: none;

    @media all and (min-width: 768px) {
      top: auto;
      z-index: 0;
      width: 100%;
      left: 10rem;
      display: none;
      bottom: -20rem;
      max-width: 60rem;
      position: absolute;
    }

    @media all and (min-width: 1024px) {
      bottom: -30rem;
      max-width: 80rem;
    }
  }
`;

export const SelectBox = styled.div`
  top: 8rem;
  z-index: 1;
  width: 100%;
  position: sticky;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.3em;
  position: -webkit-sticky;
  padding: ${({ theme }) => theme.break.big};
  background-color: ${({ theme }) => theme.blue};

  @media all and (min-width: 768px) {
    top: 7rem;
  }

  @media all and (min-width: 1024px) {
    top: 8rem;
  }

  button {
    width: 100%;
    border: none;
    display: block;
    padding: 1rem 0;
    text-align: left;
    position: relative;
    font-weight: normal;
    border-radius: inherit;

    @media all and (min-width: 780px) {
      left: -2rem;
      padding: 1rem 2rem;
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

export const FlipBoxInner = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const FlipBox = styled.div`
  width: 100%;
  height: 200px;
  perspective: 1000px;
  background-color: transparent;

  &:hover ${FlipBoxInner} {
    transform: rotateY(180deg);
  }
`;

const commonFrontBack = css`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  border-radius: 0.3rem;
  flex-direction: column;
  justify-content: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden; /* Safari */
`;

export const FlipBoxFront = styled.div`
  ${commonFrontBack}
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blue};
`;

export const FlipBoxBack = styled.div`
  ${commonFrontBack}
  color: white;
  transform: rotateY(180deg);
  background-color: ${({ theme }) => theme.blue};
`;

export const FlipBoxHeader = styled.h3`
  width: 100%;
  font-size: 2rem;
  text-align: center;
`;
export const FlipBoxList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${({ theme }) => theme.break.main};
`;

export const FlipBoxListItem = styled.li`
  padding-top: ${({ theme }) => theme.break.small};
  padding-right: ${({ theme }) => theme.break.main};
  span {
    opacity: 0.3;
  }

  &:after {
    content: ",";
    padding-right: 0.3rem;
  }

  &:last-of-type {
    &:after {
      display: none;
    }
  }
`;

export const FlipBoxButton = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme }) => theme.break.main};

  a {
    display: block;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    &:last-of-type {
      margin-left: ${({ theme }) => theme.break.main};
    }
  }
`;
