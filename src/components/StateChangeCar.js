import React, { Component } from "react";

export default class StateChangeCar extends Component {
  render() {
    return (
      <div>
        {this.props.specification}:{""}
        <input></input>
      </div>
    );
  }
}
