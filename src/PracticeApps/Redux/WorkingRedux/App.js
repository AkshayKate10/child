import React, { Component } from "react";

import { store } from "./store";
import InputBox from "./InputBox";
import DisplayPage from "./DisplayPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Working Tree</h1>
        <button onClick={this.onClickShowStore}>Show Store</button>
        <InputBox />
        <DisplayPage />
      </div>
    );
  }
  onClickShowStore = () => {
    console.log("Current Store", store.getState());
  };
}
