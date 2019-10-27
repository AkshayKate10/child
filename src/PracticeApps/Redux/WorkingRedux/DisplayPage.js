import React, { Component } from "react";
import { store } from "./store";

export default class DisplayPage extends Component {
  state = {
    newLocation: store.getState().Location
  };

  componentDidMount() {
    store.subscribe(this.updateLocalComponent);
  }

  updateLocalComponent = () => {
    const currentStore = store.getState();
    const newLocation = currentStore.Location;

    this.setState({ newLocation });
  };

  render() {
    return (
      <div>
        <h3>Display Page</h3>
        <p>Location is : {this.state.newLocation}</p>
      </div>
    );
  }
}
