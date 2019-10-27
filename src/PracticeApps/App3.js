import React, { Component } from "react";
import ButtonComponent from "./components/ButtonComponent";
import Name from "./components/Name";

export default class App3 extends Component {
  state = {
    name: "Suyash"
  };

  render() {
    return (
      <div>
        App3
        {/* <div>{this.state.name}</div> */}
        <Name newName={this.state.name} />
        <ButtonComponent
          textInButton="Click here to change the FirstName"
          onClickHandler={this.onClickButtonFirstName}
        />
        <ButtonComponent
          textInButton="Click here to change the LastName"
          onClickHandler={this.onClickButtonLastName}
        />
        <ButtonComponent
          textInButton="Click here to change the Address"
          onClickHandler={this.onClickButtonAddress}
        />
        {/* <div>
          <button onClick={this.onClickButtonFirstName}>
            Click here to change the FirstName
          </button>
        </div>
        <div>
          <button onClick={this.onClickButtonLastName}>
            Click here to change the LastName
          </button>
        </div>
        <div>
          <button onClick={this.onClickButtonAddress}>
            Click here to change the Address
          </button>
        </div> */}
      </div>
    );
  }

  onClickButtonFirstName = () => {
    this.setState({ name: "Firstname" });
  };

  onClickButtonLastName = () => {
    this.setState({ name: "Lastname" });
  };

  onClickButtonAddress = () => {
    this.setState({ name: "Addressname" });
  };
}
