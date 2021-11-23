// import plugin
import React, { useRef, useState } from "react";

// import style
import { Label, Text, CheckBoxStyled, Road, Face } from "./style/styled";

// create interface
interface InputTextProps {
  id: string;
  required?: boolean;
  children: JSX.Element | JSX.Element[] | any;
}

// create new cpomponent
export const CheckBoxClassic = ({ id, children, required }: InputTextProps) => {
  const [checkedInput, setCheckedInput] = useState(false);
  const refInput = useRef(null);

  return (
    <Label htmlFor={id} checked={checkedInput}>
      <CheckBoxStyled ref={refInput} onChange={(e) => setCheckedInput(e.target.checked)} type="checkbox" id={id} name={id} required={required} />
      <Road checked={checkedInput}>
        <Face checked={checkedInput} />
      </Road>
      <Text>{children}</Text>
    </Label>
  );
};
