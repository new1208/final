export const addOperator = (newOperator) => {
    return {
      type: "ADD_OPERATOR",
      payload: newOperator,
    };
  };

  export const deleteOperator = (id) => {
    return {
      type: "DELETE_OPERATOR",
      payload: id,
    };
  };  

  export const changeOperator = (changedOperator) => {
    return {
      type: "CHANGE_OPERATOR",
      payload: changedOperator,
    };
  };  