import React, { Component } from "react";
import One from "./one";
import Two from "./two";

export default class App extends Component {
  state = {
    parentName: ""
  };

  render() {
    return (
      <div>
        Parent
        <div>
          <One parentName={this.state.parentName} />
        </div>
        <div
          style={{ borderWidth: "2px", borderColor: "red", border: "solid" }}
        >
          <Two saveNameToParentsState={this.saveNameToParentsState} />
        </div>
      </div>
    );
  }

  saveNameToParentsState = name => {
    this.setState({ parentName: name });
  };
}
