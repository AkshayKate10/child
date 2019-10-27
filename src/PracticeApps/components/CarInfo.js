import React, { Component } from "react";

export default class CarInfo extends Component {
  render() {
    return (
      <div>
        {this.props.configration}:{""} <input placeholder="Select"></input>
      </div>
    );
  }
}
