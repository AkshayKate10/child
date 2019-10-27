import React, { Component } from "react";
import { createStore } from "redux";
import { reducer } from "./Reducer";

const store = createStore(reducer);

export default class App extends Component {
  state = {
    UserName: ""
  };
  render() {
    return (
      <div>
        <h1>Redux</h1>
        <div>
          User Name :<input onChange={this.onChangeUserName} />
          <button onClick={this.onClickAdd}>Add</button>
          <button onClick={this.onClickDelete}>Delete</button>
        </div>
        <div>
          <button onClick={this.onClickShowStore}>Show Store</button>
        </div>
      </div>
    );
  }

  onChangeUserName = e => {
    this.setState({ UserName: e.target.value });
  };

  onClickAdd = () => {
    const { UserName } = this.state;

    const saveUserNameAction = {
      type: "SAVE_ACTION",
      data: UserName
    };

    store.dispatch(saveUserNameAction);
  };

  onClickDelete = () => {
    const deleteUserName = {
      type: "DELETE_ACTION"
    };
    store.dispatch(deleteUserName);
  };

  onClickShowStore = () => {
    console.log("Current Store", store.getState());
  };
}
