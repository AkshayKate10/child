import React, { Component } from "react";
import InputField from "./components/InputField";

export default class App2 extends Component {
  render() {
    return (
      <div>
        <div> Form </div>

        <InputField
          fieldName="First Name"
          customPlaceholder="Enter first name"
        />

        <InputField fieldName="Last Name" customPlaceholder="Enter last name" />

        <InputField fieldName="Email" customPlaceholder="Enter Email" />

        <InputField fieldName="Address" customPlaceholder="Enter Address" />

        <InputField fieldName="Contact" customPlaceholder="Enter Contact" />
      </div>
    );
  }
}
