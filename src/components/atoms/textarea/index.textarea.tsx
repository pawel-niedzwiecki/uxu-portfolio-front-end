// import plugin
import React, { useEffect, useState, useRef } from "react";

// import style
import { Label, Text, TextAreaStyled } from "./style/styled";

// create interface
interface TextAreaProps {
  id: string;
  required?: boolean;
  children: JSX.Element | JSX.Element[] | any;
}

// create new cpomponent
export const TextArea = ({ id, children, required }: TextAreaProps) => {
  const [focusTextArea, setFocusTextArea] = useState(false);
  const [content, setContent] = useState("");
  const refInput = useRef(null);

  useEffect(() => {
    refInput.current.addEventListener("focus", () => {
      setFocusTextArea(true);
    });
    refInput.current.addEventListener("blur", () => {
      setFocusTextArea(false);
    });

    return () => {
      refInput.current.removeEventListener("focus", () => {
        setFocusTextArea(true);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      refInput.current.removeEventListener("blur", () => {
        setFocusTextArea(false);
      });
    };
  }, []);

  return (
    <Label htmlFor={id}>
      <Text active={!!content || focusTextArea ? true : false}>{children}</Text>
      <TextAreaStyled ref={refInput} onChange={(e) => setContent(e.target.value)} id={id} name={id} required={required} />
    </Label>
  );
};
