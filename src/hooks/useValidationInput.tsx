import { useReducer } from "react";

const useModal = (initialState = {}) => {
  function reducerInput(state: any, action: any) {
    switch (action.type) {
      case "changeValue":
        return { ...state, action };
      case "reset":
        return { ...initialState };
    }
  }

  const [stateInputs, dispatchInputs] = useReducer(reducerInput, initialState);
  return {
    stateInputs,
  };
};

// export hooks
export default useModal;
