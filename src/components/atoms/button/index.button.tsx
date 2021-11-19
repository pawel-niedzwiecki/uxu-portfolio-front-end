// import plugin
import React from "react";

// import style
import { ButtonStyled, ButtonCyrlicStyled, ButtonOutLinkStyled, ButtonInLinkStyled } from "./style/styled";

// create interface
interface ButtonProps {
  onClick?: any;
  className?: string;
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <ButtonStyled onClick={onClick} className={className}>
      {children}
    </ButtonStyled>
  );
};

// create interface
interface ButtonCyrlicProps {
  onClick: any;
  className?: string;
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
export const ButtonCyrlic = ({ children, className, onClick }: ButtonCyrlicProps) => {
  return (
    <ButtonCyrlicStyled onClick={onClick} className={className}>
      {children}
    </ButtonCyrlicStyled>
  );
};

// create interface
interface ButtonOutLinkProps {
  href: string;
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
export const ButtonOutLink = ({ children, href }: ButtonOutLinkProps, props: any) => {
  return <ButtonOutLinkStyled href={href}>{children}</ButtonOutLinkStyled>;
};

// create interface
interface ButtonInLinkProps {
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
export const ButtonInLink = ({ children }: ButtonInLinkProps, props: any) => {
  return <ButtonInLinkStyled {...props}>{children}</ButtonInLinkStyled>;
};
