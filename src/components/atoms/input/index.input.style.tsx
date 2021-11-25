// import plugin
import styled, { css } from "styled-components";

const InputTXT = css`
  height: 3.6rem;
  border-radius: 0.3rem;
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  padding: 0 ${({ theme }) => theme.break.main};
  border: 0.1rem solid ${({ theme }) => theme.riverBed};

  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  padding-top: 3rem;
  position: relative;
  flex-direction: column;
`;

interface TextPtops {
  active: boolean;
}

export const Text = styled.p<TextPtops>`
  font-size: 1.2rem;
  position: absolute;
  transition: all 0.3s;
  left: ${({ active }) => (active ? "0.2rem" : "1rem")};
  top: ${({ active }) => (active ? "1rem" : "4.2rem")};
`;

export const InputTextStyled = styled.input`
  ${InputTXT}
`;

export const InputEmailStyled = styled.input`
  ${InputTXT}
`;

export const InputTelStyled = styled.input`
  ${InputTXT}
`;
