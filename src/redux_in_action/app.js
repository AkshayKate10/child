import React, { Component } from "react";
import { store } from "./store";

import Apple from "./apple";
import Mango from "./mango";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <button onClick={this.onClickShowStore}> Show store</button>
        </div>
        <Apple />
        <Mango />
      </div>
    );
  }

  onClickShowStore = () => {
    console.log("Store: ", store.subscribe);
  };
}
