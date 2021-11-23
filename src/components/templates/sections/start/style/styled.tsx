// import plugin
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  overflow: unset;
  position: relative;

  .bg {
    background-size: 20rem;
    background-repeat: no-repeat;
    background-position: right bottom;

    @media all and (min-width: 768px) {
      background-size: 40rem;
    }

    @media all and (min-width: 1024px) {
      background-size: 60rem;
    }
  }

  .col {
    min-height: 40rem;
    height: 100vh;
    max-height: 98rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:last-of-type {
      justify-content: flex-start;
      padding-top: 25rem;
    }

    @media all and (min-width: 768px) {
      min-height: 62rem;
    }
  }

  .btn {
    margin: 3rem auto 0rem 0;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
    animation-name: startAnimation4;
  }

  @keyframes startAnimation4 {
    from {
      opacity: 0;
      top: 0rem;
    }
    to {
      opacity: 1;
      top: 3rem;
    }
  }
`;

export const H1 = styled.h1`
  font-size: 3.1rem;
  font-weight: bold;
  color: var(--uxu-pl-text);
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  animation-name: startAnimation1;

  @media all and (min-width: 768px) {
    font-size: 6.1rem;
  }

  @keyframes startAnimation1 {
    from {
      opacity: 0;
      padding-top: 3rem;
    }
    to {
      opacity: 1;
      padding-top: 0rem;
    }
  }
`;

export const H2 = styled.h2`
  font-size: 2rem;
  animation-name: startAnimation2;
  animation-duration: 500ms;
  color: var(--uxu-pl-text-off);
  animation-fill-mode: forwards;

  @media all and (min-width: 768px) {
    font-size: 3.1rem;
  }

  @keyframes startAnimation2 {
    from {
      opacity: 0;
      padding-top: 3rem;
    }
    to {
      opacity: 1;
      padding-top: 0rem;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  animation-name: startAnimation3;

  @keyframes startAnimation3 {
    from {
      opacity: 0;
      padding-top: 3rem;
    }
    to {
      opacity: 1;
      padding-top: 2rem;
    }
  }

  @media all and (min-width: 768px) {
    bottom: 6rem;
    flex-wrap: nowrap;
    position: absolute;

    @keyframes startAnimation3 {
      from {
        bottom: 0rem;
        padding-top: auto;
      }
      to {
        bottom: 6rem;
        padding-top: auto;
      }
    }
  }
`;

export const Item = styled.li`
  padding: 0.5rem 0;
  width: 100%;
  position: relative;

  @media all and (min-width: 768px) {
    padding: 0 4rem;
    width: max-content;
  }

  &::after {
    display: none;

    @media all and (min-width: 768px) {
      content: "";
      display: block;
      top: 2rem;
      width: 3rem;
      right: -1.5rem;
      height: 0.1rem;
      position: absolute;
      background: var(--uxu-pl-text-off);
    }
  }

  &:first-of-type {
    padding-left: 0;
  }
  &:last-of-type {
    padding-right: 0;

    &::after {
      display: none;
    }
  }

  button {
    padding: 0;
    border: none;
    border-radius: 0;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    @media all and (min-width: 768px) {
      font-size: 3.2rem;
    }

    &:hover {
      background: transparent;
      color: ${({ theme }) => theme.aqua};
    }
  }

  @media all and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
`;

export const ModalContent = styled.div`
  width: 100%;
  max-width: 55rem;
  position: relative;
`;

export const ModdalTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  display: block;
  width: 100%;
  text-align: center;
`;
export const ModdalDescription = styled.p`
  width: 100%;
  display: block;
  font-size: 2rem;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
