// import plugin
import React, { useRef, useEffect, useState } from "react";

// import style
import { Label, Text, InputTextStyled, InputEmailStyled, InputTelStyled } from "./index.input.style";

// create interface
interface InputTextProps {
  id: string;

  required?: boolean;
  children: string;
}

// regex

const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexTel = /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{3,6}$/im;

// create new cpomponent

let InputTextValid: ReturnType<typeof setTimeout> = setTimeout(() => "", 500);

export const InputText = ({ id, children, required }: InputTextProps) => {
  const [focusInput, setFocusInput] = useState(false);
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const refInput = useRef(null);

  const verificationValue = (value: string) => {
    clearTimeout(InputTextValid);
    InputTextValid = setTimeout(() => {
      if (value.length <= 2) return setError(true);
      setError(false);
    }, 500);
  };

  useEffect(() => {
    const { current } = refInput;

    current.addEventListener("focus", () => {
      setFocusInput(true);
    });

    current.addEventListener("blur", () => {
      if (current.value.length === 0) return setFocusInput(false);
      verificationValue(current.value);
    });

    return () => {
      current.removeEventListener("focus", () => {
        setFocusInput(true);
      });
      current.removeEventListener("blur", () => {
        if (current.value.length === 0) return setFocusInput(false);
        verificationValue(current.value);
      });
    };
  }, []);

  return (
    <Label htmlFor={id}>
      <Text active={!!content || focusInput ? true : false}>{children}</Text>
      <InputTextStyled
        error={error}
        ref={refInput}
        onChange={(e) => {
          setContent(e.target.value);
          focusInput && verificationValue(e.target.value);
        }}
        type="text"
        id={id}
        name={id}
        required={required}
      />
    </Label>
  );
};

// create interface
interface InputEmailProps {
  id: string;
  required?: boolean;
  children: JSX.Element | JSX.Element[] | any;
}

let InputEmailValid: ReturnType<typeof setTimeout> = setTimeout(() => "", 500);

// create new cpomponent
export const InputEmail = ({ id, children, required }: InputEmailProps) => {
  const [focusInput, setFocusInput] = useState(false);
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const refInput = useRef(null);

  const verificationValue = (value: string) => {
    clearTimeout(InputEmailValid);
    InputEmailValid = setTimeout(() => {
      if (regexEmail.test(value)) return setError(false);
      setError(true);
    }, 500);
  };

  useEffect(() => {
    const { current } = refInput;

    current.addEventListener("focus", () => {
      setFocusInput(true);
    });

    current.addEventListener("blur", () => {
      if (current.value.length === 0) return setFocusInput(false);
      verificationValue(current.value);
    });

    return () => {
      current.removeEventListener("focus", () => {
        setFocusInput(true);
      });
      current.removeEventListener("blur", () => {
        if (current.value.length === 0) return setFocusInput(false);
        verificationValue(current.value);
      });
    };
  }, []);

  return (
    <Label htmlFor={id}>
      <Text active={!!content || focusInput ? true : false}>{children}</Text>
      <InputEmailStyled
        error={error}
        ref={refInput}
        onChange={(e) => {
          setContent(e.target.value);
          focusInput && verificationValue(e.target.value);
        }}
        type="email"
        id={id}
        name={id}
        required={required}
      />
    </Label>
  );
};

// create interface
interface InputTelProps {
  id: string;
  required?: boolean;
  children: JSX.Element | JSX.Element[] | any;
}

let InputTelValid: ReturnType<typeof setTimeout> = setTimeout(() => "", 500);

// create new cpomponent
export const InputTel = ({ id, children, required }: InputTelProps) => {
  const [focusInput, setFocusInput] = useState(false);
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const refInput = useRef(null);

  const verificationValue = (value: string) => {
    clearTimeout(InputTelValid);
    InputTelValid = setTimeout(() => {
      if (regexTel.test(value)) return setError(false);
      setError(true);
    }, 500);
  };

  useEffect(() => {
    const { current } = refInput;

    current.addEventListener("focus", () => {
      setFocusInput(true);
    });

    current.addEventListener("blur", () => {
      if (current.value.length === 0) return setFocusInput(false);
      verificationValue(current.value);
    });

    return () => {
      current.removeEventListener("focus", () => {
        setFocusInput(true);
      });
      current.removeEventListener("blur", () => {
        if (current.value.length === 0) return setFocusInput(false);
        verificationValue(current.value);
      });
    };
  }, []);

  return (
    <Label htmlFor={id}>
      <Text active={!!content || focusInput ? true : false}>{children}</Text>
      <InputTelStyled
        error={error}
        ref={refInput}
        onChange={(e) => {
          setContent(e.target.value);
          focusInput && verificationValue(e.target.value);
        }}
        type="tel"
        id={id}
        name={id}
        required={required}
      />
    </Label>
  );
};
