import React, { Component } from "react";
import { store } from "./store";

export default class Mango extends Component {
  state = {
    newName: store.getState().name
  };

  componentDidMount() {
    store.subscribe(this.updateLocalComponent);
  }

  updateLocalComponent = () => {
    const currentStore = store.getState();
    const nameFromStore = currentStore.name;

    this.setState({ newName: nameFromStore });
  };

  render() {
    return (
      <div>
        Mango
        <div>
          Saved name is <p>{this.state.newName}</p>
        </div>
      </div>
    );
  }
}
