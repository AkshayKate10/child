import React, { Component } from "react";

export default class DisplayPage extends Component {
  render() {
    return (
      <div>
        <div>
          <button onClick={this.onClickBack}>Back</button>
        </div>
      </div>
    );
  }

  onClickBack = () => {
    const { history } = this.props;

    history.push("/");
  };
}
