// import plugin
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const buttonwholestyle = css`
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 5rem;
  background-color: transparent;
  border: 0.5rem solid ${({ theme }) => theme.aqua};

  &:focus {
    outline: none;
  }

  svg {
    height: 2rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.aqua};

    svg {
      fill: ${({ theme }) => theme.blueDark};
    }
  }
`;

// create style
export const ButtonStyled = styled.button`
  ${buttonwholestyle}
`;

// create style
export const ButtonCyrlicStyled = styled.button`
  ${buttonwholestyle}
  padding: 1rem;
  border-radius: 100%;
`;

export const ButtonOutLinkStyled = styled.a``;

export const ButtonInLinkStyled = styled(Link)``;
