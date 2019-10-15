import React, { Component } from "react";
import ReactDOM from "react-dom";
import ChildComponent from "./ChildComponent";

export default class LifecycleMethods extends Component {
  // priority 4
  constructor(props) {
    super(props);
    this.state = {
      name: "temp",
      stateAddress: "pune",
      displyType: "block"
    };

    console.log("%c Constructor", "color: black");
  }

  // priority 1
  componentWillMount() {
    console.log("%c componentWillMount", "color: blue");
  }

  // priority 5
  render() {
    console.log("%c render", "color: green; font-size: 20px;");
    return (
      <div>
        Lifecycle methods
        <p>{this.state.name}</p>
        <div id="child">
          <ChildComponent address={this.state.stateAddress} />
        </div>
        <button onClick={this.onClickChangeName}>Change name</button>
      </div>
    );
  }

  // Priority 5
  componentWillReceiveProps() {
    console.log("%c componentWillReceiveProps");
  }

  // Priority 5
  // Why API calls are always recommended to be written in this method?
  componentDidMount() {
    console.log("%c componentDidMount", "color: red");
  }

  // priority 2
  componentDidUpdate() {
    console.log("%c componentDidUpdate", "color: yellow; font-size: 18px;");
  }

  onClickChangeName = () => {
    // ReactDOM.unmountComponentAtNode(document.getElementById("root"));

    this.setState({
      name: "changed name",
      stateAddress: "mumbai"
    });
  };

  // componentWillUnmount() {
  //   console.log("%c componentWillUnmount ", "color: pink; font-size: 25px");
  // }
}
