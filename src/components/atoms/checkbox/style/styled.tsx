// import plugin
import styled, { css } from "styled-components";

interface LabelProps {
  checked: boolean;
}

export const Label = styled.label<LabelProps>`
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  padding-top: 3rem;
  position: relative;
  align-items: center;
`;

interface RoadProps {
  checked: boolean;
}

export const Road = styled.div<RoadProps>`
  flex: 0 60px;
  width: 60px;
  height: 36px;
  display: block;
  transition: 0.5s;
  position: relative;
  border-radius: 3rem;
  border: 1px solid ${({ theme }) => theme.riverBed};

  ${({ checked }) =>
    checked &&
    css`
      border: 1px solid ${({ theme }) => theme.aqua};
    `}
`;

interface FaceProps {
  checked: boolean;
}

export const Face = styled.i<FaceProps>`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 26px;
  height: 26px;
  transition: 0.5s;
  border-radius: 50%;
  background: ${({ theme }) => theme.white};

  ${({ checked }) =>
    checked &&
    css`
      left: 28px;
      background: ${({ theme }) => theme.aqua};
    `}

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 4px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.blueDark};
    box-shadow: 12px 0 0 ${({ theme }) => theme.blueDark};
    transition: 0.5s;
  }

  &::after {
    content: "";
    bottom: 6px;
    width: 12px;
    height: 4px;
    transition: 0.5s;
    position: absolute;
    left: calc(50% - 6px);
    border-radius: 0.6rem;
    background: ${({ theme }) => theme.blueDark};

    ${({ checked }) =>
      checked &&
      css`
        bottom: 2px;
        height: 8px;
        border-radius: 0;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
      `}
  }
`;

export const Text = styled.p`
  display: block;
  font-size: 1.2rem;
  position: relative;
  transition: all 0.3s;
  flex: calc(100% - 6rem);
  max-width: calc(100% - 6rem);
  padding-left: ${({ theme }) => theme.break.main};
`;

export const CheckBoxStyled = styled.input`
  display: none;
`;
