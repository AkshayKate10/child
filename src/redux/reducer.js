const storeInitailState = {
  name: "Suyash"
};

const reducer = (state = storeInitailState, action) => {
  console.log("reducer getting action: ", action);

  switch (action.type) {
    case "SAVE_ACTION":
      const cloneState = { ...state };
      cloneState.name = action.data;
      return cloneState;

    case "DELETE_NAME":
      console.log("In delete_name case");
      const cloneState2 = { ...state };
      cloneState2.name = null;
      console.log(cloneState2);
      return cloneState2;

    default:
      return state;
  }
};

export { reducer };
