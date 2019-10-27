import React, { Component } from "react";
import CarInfo from "./components/CarInfo";

export default class App4 extends Component {
  render() {
    return (
      <div>
        <div>CAR INFORMATION PAGE</div>
        <CarInfo configration="Brand" />
        <CarInfo configration="Model" />
        <CarInfo configration="Colour" />
        <CarInfo configration="Power" />
        <CarInfo configration="Price" />
        {/* <div>
          Brand : <input></input>
        </div>
        <div>
          Model : <input></input>
        </div>
        <div>
          Colour : <input></input>
        </div>
        <div>
          Power : <input></input>
        </div>
        <div>
          Price : <input></input>
        </div> */}
      </div>
    );
  }
}
