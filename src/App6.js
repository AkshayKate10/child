import React, { Component } from "react";

export default class App6 extends Component {
  state = {
    myList: []
  };
  render() {
    const namesList = this.state.myList;
    return (
      <div>
        <div>hello</div>

        <button onClick={this.onClickButton}>Table</button>

        <div>
          <table>
            <thead>
              <tr>
                <td> My Table</td>
              </tr>
            </thead>
            <tbody>
              {/* {namesList.map(x => (
                <tr>{x.body}</tr>
              ))} */}
              {this.temp(namesList)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  temp = namesList => {
    const rows = [];
    for (var i = 0; i < namesList.length; i++) {
      let x = <tr>{namesList[i].id}</tr>;
      rows.push(x);
    }
    return rows;
  };

  onClickButton = () => {
    alert("button clicked");

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        console.log("in second then");
        console.log(json);

        this.setState({ myList: json });
      });
  };
}
