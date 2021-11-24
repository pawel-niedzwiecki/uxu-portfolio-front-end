import styled, { createGlobalStyle } from "styled-components";

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
  position: fixed;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: var(--uxu-pl-bg-primary);
`;

export const Modal = styled.div`
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  display: block;
  position: fixed;
  overflow: hidden;
  border-radius: 0.3rem;
  flex-direction: column;
  background-color: var(--uxu-pl-bg-secondary);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: var(--uxu-pl-break-main);

  @media all and (min-width: 768px) {
    padding: var(--uxu-pl-break-bigger);
  }
`;

export const ModalContent = styled.div`
  display: flex;
  overflow: scroll;
  align-items: center;
  justify-content: center;
  height: calc(100% - 7rem);
  padding: 4rem var(--uxu-pl-break-main);

  @media all and (min-width: 768px) {
    height: calc(100% - 13.3rem);
  }
`;
