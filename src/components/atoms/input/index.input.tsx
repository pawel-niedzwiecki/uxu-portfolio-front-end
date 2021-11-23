// import plugin
import React, { useRef, useEffect, useState } from "react";

// import style
import { Label, Text, InputTextStyled, InputEmailStyled, InputTelStyled } from "./style/styled";

// create interface
interface InputTextProps {
  id: string;
  required?: boolean;
  children: JSX.Element | JSX.Element[] | any;
}

// create new cpomponent
export const InputText = ({ id, children, required }: InputTextProps) => {
  const [focusInput, setFocusInput] = useState(false);
  const [content, setContent] = useState("");
  const refInput = useRef(null);

  useEffect(() => {
    const { current } = refInput;

    current.addEventListener("focus", () => {
      setFocusInput(true);
    });
    current.addEventListener("blur", () => {
      setFocusInput(false);
    });

    return () => {
        
    };
  }, []);

  return (
    <Label htmlFor={id}>
      <Text active={!!content || focusInput ? true : false}>{children}</Text>
      <InputTextStyled ref={refInput} onChange={(e) => setContent(e.target.value)} type="text" id={id} name={id} required={required} />
    </Label>
  );
};

// create interface
interface InputEmailProps {
  id: string;
  required?: boolean;
  children: JSX.Element | JSX.Element[] | any;
}

// create new cpomponent
export const InputEmail = ({ id, children, required }: InputEmailProps) => {
  const [focusInput, setFocusInput] = useState(false);
  const [content, setContent] = useState("");
  const refInput = useRef(null);

  useEffect(() => {
    refInput.current.addEventListener("focus", () => {
      setFocusInput(true);
    });
    refInput.current.addEventListener("blur", () => {
      setFocusInput(false);
    });
  }, []);

  return (
    <Label htmlFor={id}>
      <Text active={!!content || focusInput ? true : false}>{children}</Text>
      <InputEmailStyled ref={refInput} onChange={(e) => setContent(e.target.value)} type="email" id={id} name={id} required={required} />
    </Label>
  );
};

// create interface
interface InputTelProps {
  id: string;
  required?: boolean;
  children: JSX.Element | JSX.Element[] | any;
}

// create new cpomponent
export const InputTel = ({ id, children, required }: InputTelProps) => {
  const [focusInput, setFocusInput] = useState(false);
  const [content, setContent] = useState("");
  const refInput = useRef(null);

  useEffect(() => {
    if (!!refInput.current) {
      refInput.current.addEventListener("focus", () => {
        setFocusInput(true);
      });
      refInput.current.addEventListener("blur", () => {
        setFocusInput(false);
      });
    }
  }, [focusInput]);

  return (
    <Label htmlFor={id}>
      <Text active={!!content || focusInput ? true : false}>{children}</Text>
      <InputTelStyled ref={refInput} onChange={(e) => setContent(e.target.value)} type="tel" id={id} name={id} required={required} />
    </Label>
  );
};
