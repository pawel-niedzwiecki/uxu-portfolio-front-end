// import plugin
import styled, { css } from "styled-components";

export const Section = styled.section`
  width: 100%;
  overflow: unset;
  position: relative;

  .col {
    padding: 1rem;
  }
`;

export const SelectBox = styled.div`
  top: 8.2rem;
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
