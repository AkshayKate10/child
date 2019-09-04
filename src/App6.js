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
                <th> User Id </th>
                <th> id </th>
                <th> title </th>
                <th> body </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.temp1(namesList)}</td>

                <td>{this.temp2(namesList)}</td>

                <td>{this.temp3(namesList)}</td>

                <td>{this.temp4(namesList)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  temp1 = namesList => {
    const rows = [];
    for (var i = 0; i < namesList.length; i++) {
      let x = <tr>{namesList[i].userId}</tr>;
      rows.push(x);
    }
    return rows;
  };

  temp2 = namesList => {
    const rows = [];
    for (var i = 0; i < namesList.length; i++) {
      let x = <tr>{namesList[i].id}</tr>;
      rows.push(x);
    }
    return rows;
  };
  temp3 = namesList => {
    const rows = [];
    for (var i = 0; i < namesList.length; i++) {
      let x = <tr>{namesList[i].title}</tr>;
      rows.push(x);
    }
    return rows;
  };

  temp4 = namesList => {
    const rows = [];
    for (var i = 0; i < namesList.length; i++) {
      let x = <tr>{namesList[i].body}</tr>;
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
