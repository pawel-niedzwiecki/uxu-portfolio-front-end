// import plugin
import styled, { createGlobalStyle } from "styled-components";

// create global style
export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ModalWraper = styled.div`
  top: 0;
  width: 100vw;
  display: flex;
  z-index: 999999;
  min-height: 100vh;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: var(--uxu-pl-bg-primary);
`;

export const Modal = styled.div`
  top: 10%;
  width: 80%;
  height: 80vh;
  display: block;
  position: fixed;
  border-radius: 0.3rem;
  flex-direction: column;
  background-color: var(--uxu-pl-bg-secondary); ;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: var(--uxu-pl-break-bigger);
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 13.3rem);
`;
