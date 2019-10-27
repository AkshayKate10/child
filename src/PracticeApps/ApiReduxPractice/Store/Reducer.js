const storeInitialState = {};

const reducer = (state = storeInitialState, action) => {
  switch (action.type) {
    case SAVE:
      return state;
    case DELETE:
      return state;
    default:
      return state;
  }
};
export { reducer };
