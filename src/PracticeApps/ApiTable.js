import React, { Component } from "react";

export default class ApiTable extends Component {
  state = {
    receivedArray: [],
    inputRow: "",
    updatedArray: []
  };
  render() {
    return (
      <div>
        <div>
          <button onClick={this.onClickOldArray}>Old Array</button>
        </div>
        <input
          value={this.state.inputRow}
          placeholder={"Type Row No to delete"}
          onChange={this.onChangeInputRow}
        ></input>
        <div>
          <button onClick={this.onClickNewArray}>New Array</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <td>
              {this.state.receivedArray.map(x => (
                <tr>{x.id}</tr>
              ))}
            </td>
            <td>
              {this.state.receivedArray.map(x => (
                <tr>{x.title}</tr>
              ))}
            </td>
          </tbody>
        </table>
      </div>
    );
  }

  onChangeInputRow = e => {
    var inputRowNo = e.target.value;
    this.setState({ inputRow: inputRowNo });
    console.log(inputRowNo);
  };

  onClickOldArray = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ receivedArray: json });
      });
  };
  onClickNewArray = () => {
    var { receivedArray } = this.state;
    var { inputRow } = this.state;

    if (inputRow !== "") {
      var toUpdateArray = receivedArray.splice(inputRow, 1);
    }
    this.setState({ updatedArray: toUpdateArray });

    console.log(receivedArray);
    console.log(inputRow);
  };
}
