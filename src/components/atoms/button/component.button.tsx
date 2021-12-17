// import plugin
import React from "react";

// import style
import { ButtonStyled, ButtonCyrlicStyled, ButtonOutLinkStyled, ButtonInLinkStyled, ButtonSubmitStyled } from "./component.button.style";

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
  title?: string;
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
export const ButtonOutLink = ({ children, href, title }: ButtonOutLinkProps, props: any) => {
  return (
    <ButtonOutLinkStyled href={href} title={title} target="_blank">
      {children}
    </ButtonOutLinkStyled>
  );
};

// create interface
interface ButtonInLinkProps {
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
export const ButtonInLink = ({ children }: ButtonInLinkProps, props: any) => {
  return <ButtonInLinkStyled {...props}>{children}</ButtonInLinkStyled>;
};

// create interface
interface ButtonSubmitProps {
  style?: any;
  onClick?: any;
  className?: string;
  children?: JSX.Element | JSX.Element[] | any;
}

// create component
export const ButtonSubmit = ({ children, className, onClick, style }: ButtonSubmitProps) => {
  return (
    <ButtonSubmitStyled onClick={onClick} className={className} style={style} type="submit">
      {children}
    </ButtonSubmitStyled>
  );
};
