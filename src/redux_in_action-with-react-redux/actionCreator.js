import * as constants from "./constants";

const saveNameAction = name => ({
  type: constants.SAVE_NAME,
  data: name
});

const deleteNameAction = () => ({
  type: constants.DELETE_NAME
});

export { saveNameAction, deleteNameAction };
