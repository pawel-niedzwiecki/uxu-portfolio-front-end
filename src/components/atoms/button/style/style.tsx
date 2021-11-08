import styled, { css } from "styled-components";
import { animated } from "react-spring";
import { Link } from "gatsby";

const buttonStyles = css`
  opacity: 1;
  border: none;
  display: flex;
  outline: none;
  font-weight: bold;
  font-size: 1.5rem;
  position: relative;
  align-items: center;
  transition: all 0.3s;
  border-radius: 0.3rem;
  justify-content: center;
  background-color: transparent;
`;

const buttonColor = css`
  color: ${(props) => props.theme.settings.colorTextActive};

  svg {
    transition: all 0.3s;
    fill: ${(props) => props.theme.settings.black};
  }

  &:hover {
    color: ${(props) => props.theme.settings.green};

    svg {
      fill: ${(props) => props.theme.settings.green};
    }
  }

  ${(props) =>
    props.theme.button === true &&
    css`
      height: 4.2rem;
      padding: 1.5rem 3rem;
      color: ${props.theme.settings.colorTextActive};
      background-color: ${props.theme.settings.colorBackgroundDisactive};

      &:hover {
        color: ${props.theme.settings.colorBackgroundDisactive};
        background-color: ${props.theme.settings.colorTextActive};
      }
    `}
`;

export const LinkOut = styled(animated.a)`
  ${buttonColor}
  ${buttonStyles}
  cursor: pointer;
`;

export const Button = styled(animated.button)`
  ${buttonColor}
  ${buttonStyles}
    ${(props) =>
    props.disabled &&
    css`
      opacity: 0.2;
      cursor: no-drop !important;
      color: ${props.theme.settings.colorText};
      background-color: ${props.theme.settings.colorBackgroundDisactive};

      &:hover {
        color: ${props.theme.settings.colorText};
        background-color: ${props.theme.settings.colorBackgroundDisactive};
      }
    `}
`;

export const LinkIn = styled(Link)`
  ${buttonColor}
  ${buttonStyles}
  cursor: pointer;
`;

export const Sumbit = styled.button`
  ${buttonStyles}
  height: 4rem;
  color: #434040;
  cursor: pointer;
  padding: 1rem 3rem;
  border-radius: 1rem;
  transition: all 0.3s;
  background: #c5e1a1;
  font-family: "Montserrat", sans-serif;
  box-shadow: 0px 6px 31px rgb(0 0 0 / 16%);

  &:hover {
    transition: all 0.3s;
    background: #d1d1d1;
  }
`;
