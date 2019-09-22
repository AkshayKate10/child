import React, { Component } from "react";

export default class ChildComponent extends Component {
  // priority 4
  constructor(props) {
    super(props);

    console.log("%c Child Constructor", "color: black");
  }

  state = {
    hello: this.props.address
  };

  // priority 1
  componentWillMount() {
    console.log("%c Child componentWillMount", "color: blue");
  }

  // priority 5
  render() {
    console.log("%c Child render", "color: green; font-size: 20px;");
    return (
      <div>
        Child Component
        <p>{this.state.hello}</p>
      </div>
    );
  }

  // Priority 5
  // This is also changed in latest versions
  componentWillReceiveProps(nextProps) {
    console.log("%c Child componentWillReceiveProps");
    console.log("nextProps: ", nextProps);

    this.setState({ hello: nextProps.address });
  }

  // Priority 3
  // When this method returns false
  // render, componentDidUpdate will not be called
  shouldComponentUpdate(props) {
    console.log("shouldComponentUpdate: ", props);
    if (props.address === "mumbai") {
      return false;
    }
    return true;
  }

  // Priority 5
  componentDidMount() {
    console.log("%c Child componentDidMount", "color: red");
  }

  // priority 2
  componentDidUpdate() {
    console.log(
      "%c Child componentDidUpdate",
      "color: yellow; font-size: 18px;"
    );
  }

  onClickChangeName = () => {
    this.setState({ name: "changed name" });
  };

  // Unsubscribe from event listeners
  // For example timers
  componentWillUnmount() {
    console.log(
      "%c child componentWillUnmount ",
      "color: pink; font-size: 25px"
    );
  }
}
