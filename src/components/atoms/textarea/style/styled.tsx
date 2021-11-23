// import plugin
import styled from "styled-components";

// create component
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
  top: ${({ active }) => (active ? "1rem" : "3.8rem")};
`;

export const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 8rem;
  border-radius: 0.3rem;
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  padding: ${({ theme }) => theme.break.main};
  border: 0.1rem solid ${({ theme }) => theme.riverBed};

  &:focus {
    outline: none;
  }
`;
