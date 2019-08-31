import React, { Component } from "react";

export default class App extends Component {
  state = {
    password: "",
    newUsername: "",

    userName: ""
  };

  render() {
    return (
      <div className="App">
        <h1>
          <ins>Google Login</ins>
        </h1>
        <p>
          User name
          <input
            onChange={this.onChangeUsername}
            value={this.state.userName}
          ></input>
        </p>
        <p>
          Password
          <input
            value={this.state.password}
            onChange={this.onChangePassword}
          ></input>
        </p>
        <button onClick={this.onClickButton1}>Login</button>
      </div>
    );
  }

  onChangeUsername = e => {
    const inputUserName = e.target.value;
    this.setState({ userName: inputUserName });

    console.log(inputUserName);
  };
  onChangePassword = e => {
    const inputPassword = e.target.value;

    this.setState({ password: inputPassword });

    console.log(inputPassword);
  };

  onClickButton1 = () => {
    if (
      (this.state.userName === "abc" && this.state.password === "123") ||
      (this.state.userName === "xyz" && this.state.password === "456")
    ) {
      alert("login successful");
      this.setState({ userName: "" });
      this.setState({ password: "" });
    } else {
      alert("login unsuccessful");
    }
  };
}
