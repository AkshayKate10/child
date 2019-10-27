import * as constants from "./constants";

const storeInitailState = {
  name: "Suyash"
};

const reducer = (state = storeInitailState, action) => {
  switch (action.type) {
    case constants.SAVE_NAME:
      return {
        ...state,
        name: action.data
      };

    case constants.DELETE_NAME:
      return {
        ...state,
        name: null
      };

    default:
      return state;
  }
};

export { reducer };
