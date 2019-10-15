import React, { Component } from "react";

export default class One extends Component {
  render() {
    return (
      <div>
        One
        <div>{this.props.parentName}</div>
      </div>
    );
  }
}
