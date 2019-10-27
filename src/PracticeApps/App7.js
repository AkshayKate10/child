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
                <td>
                  {namesList.map(x => (
                    <tr>{x.userId}</tr>
                  ))}
                </td>

                <td>
                  {namesList.map(x => (
                    <tr>{x.id}</tr>
                  ))}
                </td>

                <td>
                  {namesList.map(x => (
                    <tr>{x.title}</tr>
                  ))}
                </td>

                <td>
                  {namesList.map(x => (
                    <tr>{x.body}</tr>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

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
