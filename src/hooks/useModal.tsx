// import plugin
// import plugin
import { useState } from "react";

// import component
import Modal from "components/orgamis/modal/index.modal";

// create news hooks
const useModal = (initialState = false) => {
  const [isOpen, setSetModalState] = useState(initialState);

  const handleOpenModal = () => setSetModalState(true);

  const handleClouseModal = () => setSetModalState(false);

  return {
    Modal,
    isOpen,
    handleOpenModal,
    handleClouseModal,
  };
};

// export hooks
export default useModal;
