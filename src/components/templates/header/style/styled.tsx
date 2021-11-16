// import plugin
import styled from "styled-components";
import { Link } from "react-router-dom";

// create new elemnt
export const Header = styled.header`
  width: 100%;
  z-index: 99999;
  display: block;
  position: fixed;
  transition: all 0.3s;
`;

export const Logo = styled(Link)`
  display: block;
  position: relative;

  svg {
    height: 4rem;
    fill: ${({ theme }) => theme.white};
    &:hover {
      fill: ${({ theme }) => theme.aqua};
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
  position: relative;
  width: max-content;

  padding: 0 1rem;

  &:last-of-type {
    padding-right: 0;
  }

  a {
    display: block;
    color: white;
    font-size: 3rem;
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.aqua};
    }
    &.active {
      cursor: no-drop;
      color: ${({ theme }) => theme.gray};
    }
  }
`;
