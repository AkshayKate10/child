import React, { Component } from "react";
import { createStore } from "redux";
import { reducer } from "./reducer";

const store = createStore(reducer);

export default class App extends Component {
  state = {
    username: ""
  };

  render() {
    return (
      <div>
        <div>
          <div>
            Username: <input onChange={this.onChangeUsername} />
            <button onClick={this.onClickSaveUsername}>Save Username</button>
          </div>
          <div>
            <button onClick={this.onClickDeleteName}>Delete name</button>
          </div>
          <button onClick={this.onClickShowStore}>Show Store</button>
        </div>
      </div>
    );
  }

  onClickDeleteName = () => {
    const deleteNameAction = {
      type: "DELETE_NAME"
    };

    store.dispatch(deleteNameAction);
  };

  onClickSaveUsername = () => {
    const { username } = this.state;

    const saveUsernameAction = {
      type: "SAVE_ACTION",
      data: username
    };

    store.dispatch(saveUsernameAction);

    console.log("Action dispatched", saveUsernameAction);
  };

  onChangeUsername = e => {
    this.setState({ username: e.target.value });
  };

  onClickShowStore = () => {
    // console.log("Current store:", store);
    console.log("Current store:", store.getState());
  };
}
