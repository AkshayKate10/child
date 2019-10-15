import { SAVE_NAME } from "./constants";

const storeInitailState = {
  name: "Suyash"
};

const reducer = (state = storeInitailState, action) => {
  switch (action.type) {
    case SAVE_NAME:
      return {
        ...state,
        name: action.data
      };

    case "DELETE_NAME":
      return {
        ...state,
        name: null
      };

    default:
      return state;
  }
};

export { reducer };
