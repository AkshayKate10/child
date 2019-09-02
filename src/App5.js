import React, { Component } from "react";
import StateChangeCar from "./components/StateChangeCar";

export default class App5 extends Component {
  state = {
    Brand: "Honda",
    Model: "City",
    Type: "Petrol"
  };
  render() {
    console.log("render function");
    return (
      <div>
        <div>State Change</div>
        <div> {this.state.Brand} </div>
        <div> {this.state.Model} </div>
        <div> {this.state.Type} </div>

        <div>
          <button onClick={this.onClickButton2}>Only Brand Change</button>
        </div>
        <div>
          <button onClick={this.onClickButton1}>Click To Change All</button>
        </div>
      </div>
    );
  }

  onClickButton1 = () => {
    console.log(" All Changed");
    this.setState({ Brand: "BMW", Model: "X5", Type: "Diesel" });
  };
  onClickButton2 = () => {
    console.log(" Brand Changed");
    this.setState({ Brand: "BMW" });
  };
}
