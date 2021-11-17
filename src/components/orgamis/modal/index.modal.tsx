// import plugin
import ReactDOM from "react-dom";
import React, { useEffect, useContext } from "react";

// import style
import { GlobalStyle, ModalWraper, Modal, ModalHeader, ModalContent } from "components/orgamis/modal/style/styled";

// import provider
import { LanguageContext } from "providers/LanguageProvider";

// import component
import { ButtonCyrlic } from "components/atoms/button/index.button";

// import svg
//import svg
import { ReactComponent as Closed } from "assets/icon/closed.svg";

// search portal
const modalContainer = document.getElementById("modal-container");

// create interface
interface ModalComponentProps {
  handleClouseModal: any;
  children: JSX.Element | JSX.Element[] | any;
}

// create component
const ModalComponent = ({ handleClouseModal, children }: ModalComponentProps) => {
  const { language } = useContext(LanguageContext);
  const modalNode = document.createElement("div");
  console.log(language);

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer?.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <ModalWraper>
      <GlobalStyle />
      <Modal>
        <ModalHeader>
          <ButtonCyrlic onClick={handleClouseModal}>
            <Closed />
          </ButtonCyrlic>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </Modal>
    </ModalWraper>,
    modalNode
  );
};

// export component
export default ModalComponent;
