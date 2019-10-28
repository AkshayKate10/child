import React, { Component } from "react";
import { connect } from "react-redux"; // connect is HOC- Higher Order Component
import { saveNameAction } from "./actionCreator";

class Apple extends Component {
  state = {
    name: ""
  };

  render() {
    return (
      <div>
        Apple
        <div>
          Name: <input onChange={this.onChangeName} />
          <button onClick={this.onClickSaveName}>Save name</button>
        </div>
      </div>
    );
  }

  onChangeName = e => {
    this.setState({ name: e.target.value });
  };

  onClickSaveName = () => {
    const { name } = this.state;
    const { dispatchSaveNameAction } = this.props;

    dispatchSaveNameAction(saveNameAction(name));
  };
}

const mapStateToProps = state => ({
  currentState: state,
  name: state.name
});

const mapDispatchToProps = dispatch => ({
  dispatchSaveNameAction: saveNameAction => dispatch(saveNameAction),
  dispatchDeleteNameAction: deleteNameAction => dispatch(deleteNameAction)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Apple);
