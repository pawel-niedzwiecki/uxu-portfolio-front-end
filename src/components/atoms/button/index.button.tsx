// import plugin
import React from "react";

// import style
import { ButtonStyled, ButtonCyrlicStyled, ButtonOutLinkStyled, ButtonInLinkStyled } from "./style/styled";

// create interface
interface ButtonProps {
  onClick: any;
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
export const Button = ({ children, onClick }: ButtonProps) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

// create interface
interface ButtonCyrlicProps {
  onClick: any;
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
export const ButtonCyrlic = ({ children, onClick }: ButtonCyrlicProps) => {
  return <ButtonCyrlicStyled onClick={onClick}>{children}</ButtonCyrlicStyled>;
};

// create interface
interface ButtonOutLinkProps {
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
export const ButtonOutLink = ({ children }: ButtonOutLinkProps, props: any) => {
  return <ButtonOutLinkStyled {...props}>{children}</ButtonOutLinkStyled>;
};

// create interface
interface ButtonInLinkProps {
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
export const ButtonInLink = ({ children }: ButtonInLinkProps, props: any) => {
  return <ButtonInLinkStyled {...props}>{children}</ButtonInLinkStyled>;
};
