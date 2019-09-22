// Container component
// Statefull component
// Class component

// When to use class and functional component?

import React, { Component } from "react";
import RenderNamesList from "./RenderNamesList";

export default class TypesOfComponents extends Component {
  state = {
    names: []
  };

  render() {
    return (
      <div>
        Types of components.
        <div>Container</div>
        <RenderNamesList namesList={this.state.names} />
        <button onClick={this.onClickRenderList}>Render List</button>
      </div>
    );
  }

  onClickRenderList = () => {
    const list = ["lsd", "uoi", "nuisf", "jhweoiv"];

    this.setState({ names: list });
  };
}
