import React, { Component } from "react";

export default class SearchArrayByInput extends Component {
  state = {
    addNumberAlert: "",
    foundResultDisplay: "",
    notFoundResultDisplay: "",
    number: "",
    numberToAdd: [],
    searchNumber: "",
    numberToDelete: ""
  };

  render() {
    return (
      <div>
        <div>
          <input value={this.state.number} onChange={this.onChangeAdd}></input>
          <p>{this.state.addNumberAlert}</p>
        </div>

        <div>
          <button onClick={this.onClickButtonAdd}>Add</button>
        </div>
        {/* <p>{this.state.numberToAdd}</p> */}

        <div>
          <input
            value={this.state.searchNumber}
            onChange={this.onChangeSearch}
          ></input>
        </div>

        <div>
          <button onClick={this.onClickButtonSearch}>Search</button>

          <button onClick={this.onClickDelete}>Delete</button>
        </div>

        <p style={{ color: "green" }}>{this.state.foundResultDisplay}</p>
        <p style={{ color: "red" }}>{this.state.notFoundResultDisplay}</p>
      </div>
    );
  }

  onChangeAdd = e => {
    var numberToAdd = e.target.value;
    this.setState({ number: numberToAdd, addNumberAlert: "" });
  };

  onClickButtonAdd = () => {
    var addNum = this.state.numberToAdd;

    if (this.state.number !== "") {
      addNum.push(this.state.number);
      this.setState({
        addNumberAlert: "Number Added successfully",
        number: ""
      });
    }

    console.log(addNum);
  };

  onChangeSearch = e => {
    var numberToSearch = e.target.value;
    this.setState({ searchNumber: numberToSearch });
  };

  onClickButtonSearch = () => {
    var indexOfNumber = null;
    var i = 0;
    var addNum = this.state.numberToAdd;

    console.log(this.state.numberToAdd);

    for (i = 0; i < addNum.length; i++) {
      if (addNum[i] == this.state.searchNumber) {
        indexOfNumber = i;
      }
    }
    console.log(indexOfNumber);

    if (indexOfNumber === null) {
      console.log("Number not found");
      this.setState({
        notFoundResultDisplay: "Number not found",
        searchNumber: ""
      });
    } else {
      console.log("number found at index = ", indexOfNumber);

      const msg = "Number found at index = " + indexOfNumber;
      this.setState({
        foundResultDisplay: msg,
        searchNumber: "",
        numberToDelete: indexOfNumber
      });
    }
  };
  onClickDelete = () => {
    var addNum = this.state.numberToAdd;
    var deleteNum = this.state.numberToDelete;

    if (deleteNum !== "") {
      var deleted = addNum.splice(deleteNum, 1);
      console.log("New array:", addNum);
      console.log("Deleted number:", deleted);
    } else {
      console.log("Type Number to Delete");
    }
  };
}
