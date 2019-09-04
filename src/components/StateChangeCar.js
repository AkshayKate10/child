import React, { Component } from "react";

export default class StateChangeCar extends Component {
  render() {
    console.log("State change Car");
    return (
      <div>
        {this.props.temp}
        {""}
      </div>
    );
  }
}
