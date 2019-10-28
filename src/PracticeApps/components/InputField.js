import React, { Component } from "react";

export default class InputField extends Component {
  render() {
    return (
      <div>
        {this.props.fieldName}
        <input placeholder={this.props.customPlaceholder} />
      </div>
    );
  }
}
