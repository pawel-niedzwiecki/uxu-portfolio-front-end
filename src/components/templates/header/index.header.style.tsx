import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  z-index: 99999;
  display: block;
  position: fixed;
  max-height: 6rem;
  transition: all 0.3s;
`;

export const Logo = styled.button`
  padding: 0;
  border: none;
  display: flex;
  position: relative;
  align-items: center;
  background: transparent;

  svg {
    height: 2rem;
    fill: ${({ theme }) => theme.white};
    &:hover {
      fill: ${({ theme }) => theme.aqua};
    }

    @media all and (min-width: 768px) {
      height: 3rem;
    }

    @media all and (min-width: 1170px) {
      height: 4rem;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  padding: 0 1rem;
  position: relative;
  width: max-content;

  &:last-of-type {
    padding-right: 0;
  }

  a {
    display: block;
    color: white;
    font-size: 1.6rem;
    font-weight: bold;

    @media all and (min-width: 768px) {
      font-size: 2.3rem;
    }

    @media all and (min-width: 1170px) {
      font-size: 3rem;
    }

    &:hover {
      color: ${({ theme }) => theme.aqua};
    }

    &.active {
      cursor: no-drop;
      color: ${({ theme }) => theme.gray};
    }
  }
`;
