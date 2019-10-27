import React, { Component } from "react";
import { store } from "./store";
import { SAVE_NAME } from "./constants";

export default class Apple extends Component {
  state = {
    name: ""
  };

  render() {
    return (
      <div>
        Apple
        <div>
          Name: <input onChange={this.onChangeName} />
          <button onClick={this.onClickSaveName}>Save name</button>
        </div>
      </div>
    );
  }

  onChangeName = e => {
    this.setState({ name: e.target.value });
  };

  onClickSaveName = () => {
    const { name } = this.state;

    const saveNameAction = {
      type: SAVE_NAME,
      data: name
    };

    store.dispatch(saveNameAction);
  };
}
