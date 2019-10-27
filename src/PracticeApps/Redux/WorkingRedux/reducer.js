import { SAVE } from "./constants";
import { DELETE } from "./constants";
const storeInitialState = {
  Location: "Pune"
};

const reducer = (state = storeInitialState, action) => {
  switch (action.type) {
    case SAVE:
      console.log("Save Action Recived", action);
      return { ...state, Location: action.data };

    case DELETE:
      console.log("Delete Action Recived", action);
      return { ...state, Location: null };

    default:
      return state;
  }
};
export { reducer };
