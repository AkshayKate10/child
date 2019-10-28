import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import Apple from "./apple";
import Mango from "./mango";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <button onClick={this.onClickShowStore}> Show store</button>
        </div>
        <Apple />
        <Mango />
      </Provider>
    );
  }

  onClickShowStore = () => {
    console.log("Store: ", store.getState());
  };
}
