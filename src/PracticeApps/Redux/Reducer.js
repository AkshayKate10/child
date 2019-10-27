const storeInitialState = {
  UserName: "dagad"
};

const reducer = (state = storeInitialState, action) => {
  switch (action.type) {
    case "SAVE_ACTION":
      const cloneState = { ...state };
      cloneState.UserName = action.data;

      console.log("Save Action Recived", action);
      return cloneState;

    case "DELETE_ACTION":
      const cloneState2 = { ...state };
      cloneState2.UserName = null;

      console.log("Delete Action Recived", action);
      return cloneState2;

    default:
      return state;
  }
};

export { reducer };
