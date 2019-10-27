import React, { Component } from "react";

export default class ButtonComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClickHandler}>
          {this.props.textInButton}
        </button>
      </div>
    );
  }
}
