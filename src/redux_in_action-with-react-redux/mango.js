import React, { Component } from "react";
import { connect } from "react-redux";

class Mango extends Component {
  render() {
    return (
      <div>
        Mango
        <div>Saved name is {this.props.name}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name
});

export default connect(mapStateToProps)(Mango);
