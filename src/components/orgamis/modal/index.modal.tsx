import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import { ReactComponent as Closed } from "assets/icon/closed.svg";
import { ButtonCyrlic } from "components/atoms/button/index.button";
import { ModalWraper, Modal, ModalHeader, ModalContent } from "components/orgamis/modal/index.modal.style";

const modalContainer = document.getElementById("modal-container");

interface ModalComponentProps {
  handleClouseModal: any;
  children: JSX.Element | JSX.Element[] | any;
}

const ModalComponent = ({ handleClouseModal, children }: ModalComponentProps) => {
  const modalNode = document.createElement("div");

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer?.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <ModalWraper>
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
