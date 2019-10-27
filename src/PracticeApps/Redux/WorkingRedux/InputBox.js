import React, { Component } from "react";
import { store } from "./store";
import { SAVE } from "./constants";
import { DELETE } from "./constants";

export default class InputBox extends Component {
  state = {
    Location: ""
  };
  render() {
    return (
      <div>
        <h3>Input Box</h3>
        <div>
          Location : <input onChange={this.onChangeLocation} />
        </div>
        <div>
          <button onClick={this.onClickAdd}>Add</button>
        </div>
        <div>
          <button onClick={this.onClickDelete}>Delete</button>
        </div>
      </div>
    );
  }

  onChangeLocation = e => {
    this.setState({ Location: e.target.value });
  };

  onClickAdd = () => {
    const { Location } = this.state;

    const saveLocationAction = {
      type: SAVE,
      data: Location
    };

    store.dispatch(saveLocationAction);
  };

  onClickDelete = () => {
    const deleteLocationAction = {
      type: DELETE
    };

    store.dispatch(deleteLocationAction);
  };
}
