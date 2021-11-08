// import plugin
import styled from "styled-components";
import { Link } from "gatsby";

// create new elemnt

export const Header = styled.header`
  width: 100%;
  height: 4rem;
  z-index: 99999;
  display: block;
  position: fixed;
  padding: ${({ theme }) => theme.break.main} 0;
  background-color: ${({ theme }) => theme.blue};
`;

export const LinkLogo = styled(Link)`
  svg {
    height: 2rem;
    fill: ${({ theme }) => theme.white};
    &:hover {
      fill: ${({ theme }) => theme.aqua};
    }
  }
`;
