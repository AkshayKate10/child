import React, { Component } from "react";

import Moment from "react-moment";
const now = new Date();
const nowStr = Date();
// const dateToFormat = "1976-04-19T12:59-0500";

export default class MomentPractice extends Component {
  render() {
    return (
      <div>
        {/* <Moment>2019-10-19 13:22</Moment> */}
        {nowStr}
      </div>
    );
  }
}
