import React, { Component } from "react";
import StateChangeCar from "./components/StateChangeCar";

export default class App5 extends Component {
  state = {
    Brand: "Honda",
    Model: "City",
    Type: "Petrol",
    myList: []
  };
  render() {
    console.log("render function");
    const namesList = this.state.myList;

    return (
      <div>
        <div>State Change</div>
        <div> {this.state.Brand} </div>
        <div>
          <StateChangeCar temp={this.state.Model} />
        </div>

        <div> {this.state.Type} </div>

        <div>
          <button onClick={this.onClickButton2}>Only Brand Change</button>
        </div>
        <div>
          <button onClick={this.onClickButton1}>Click To Change All</button>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <td>name</td>
              </tr>
            </thead>
            <tbody>
              {/* {namesList.map(x => (
                <tr>{x.body}</tr>
              ))} */}
              {this.temp(namesList)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  temp = namesList => {
    const rows = [];
    for (var i = 0; i < namesList.length; i++) {
      let x = <tr>{namesList[i].title}</tr>;
      rows.push(x);
    }
    return rows;
  };

  onClickButton1 = () => {
    // console.log(" All Changed");
    // this.setState({ Brand: "BMW", Model: "X5", Type: "Diesel" });

    console.log("API call START");

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        console.log("in second then");
        console.log(json);

        this.setState({ myList: json });
      });
  };
  onClickButton2 = () => {
    console.log(" Brand Changed");
    this.setState({ Brand: "BMW" });
  };
}
