import React, { Component } from "react";

export default class ArraySearchAndDelete extends Component {
  state = {
    arrayOfNumber: [],
    inputNumber: "",
    addNumberAlert: "",
    numberToDelete: ""
  };

  render() {
    return (
      <div>
        <div style={{ float: "right" }}>
          {this.renderArrayElement(this.state.arrayOfNumber)}
        </div>

        <div className="title"> Input Array Search And Delete</div>

        <div>
          <input
            value={this.state.inputNumber} //to set value null after adding no in array
            onChange={this.onChangeAddInput}
          />
        </div>

        <button onClick={this.onClickAddButton}>ADD</button>

        <div>
          <input
            value={this.state.numberToDelete}
            onChange={this.onChangeDeleteInput}
          />
        </div>

        <button onClick={this.onClickDeleteButton}>DELETE</button>

        <p style={{ color: "green" }}>{this.state.addNumberAlert}</p>
      </div>
    );
  }

  //   single line arrow function
  //   renderArrayElement = arrayOfNumber => {
  //     return arrayOfNumber.map(x => <p key={x}>{x}</p>);
  //   };

  renderArrayElement = arrayOfNumber =>
    arrayOfNumber.map((x, index) => <p key={index}>{x}</p>);

  onChangeAddInput = e => {
    this.setState({ inputNumber: e.target.value, addNumberAlert: "" });
  };

  onClickAddButton = () => {
    const { inputNumber, arrayOfNumber } = this.state; // object destructring

    if (inputNumber !== "") {
      arrayOfNumber.push(inputNumber);
      this.setState({
        addNumberAlert: "Number Added successfully",
        inputNumber: "",
        arrayOfNumber: arrayOfNumber
      });
    }
  };
  onChangeDeleteInput = e => {
    this.setState({ numberToDelete: e.target.value });
  };
  onClickDeleteButton = () => {
    const { numberToDelete, arrayOfNumber } = this.state;
    // var indexOfDeleteNum = null;

    // for (var i = 0; i < arrayOfNumber.length; i++) {
    //   if (arrayOfNumber[i] === numberToDelete) {
    //     indexOfDeleteNum = i;
    //   }
    // }

    if (numberToDelete !== "") {
      console.log(arrayOfNumber.filter(x => x !== numberToDelete));
      const updatedArray = arrayOfNumber.filter(x => x !== numberToDelete);

      this.setState({ arrayOfNumber: updatedArray, numberToDelete: "" });
    } else {
      console.log("Type Number to Delete");
    }
  };
}
