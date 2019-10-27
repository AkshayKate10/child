import React, { Component } from "react";

export default class ButtonPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ShowButtonEnable: true
    };
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.onClickGet}>GET</button>
        </div>
        <div>
          <button
            disabled={this.state.ShowButtonEnable}
            onClick={this.onClickShow}
          >
            SHOW RESULT
          </button>
        </div>
      </div>
    );
  }
  onClickGet = () => {
    this.setState({ ShowButtonEnable: false });
  };

  onClickShow = () => {
    const { history } = this.props;

    history.push("/DisplayPage");
  };
}
