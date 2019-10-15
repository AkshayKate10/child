import React, { Component } from "react";

export default class Two extends Component {
  state = {
    name: ""
  };

  render() {
    return (
      <div>
        Two
        <input onChange={this.onChangeName}></input>
        <button onClick={this.onClickAdd}>Add name</button>
      </div>
    );
  }

  onChangeName = e => {
    this.setState({ name: e.target.value });
  };

  onClickAdd = () => {
    const { saveNameToParentsState } = this.props;
    saveNameToParentsState(this.state.name);
  };
}
