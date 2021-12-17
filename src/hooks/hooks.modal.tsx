import { useState } from "react";

const useModal = (initialState = false) => {
  const [isOpen, setSetModalState] = useState(initialState);

  const handleOpenModal = () => setSetModalState(true);

  const handleClouseModal = () => setSetModalState(false);

  return {
    isOpen,
    handleOpenModal,
    handleClouseModal,
  };
};

export default useModal;
