import React, { Component } from "react";
export default class ApiArray extends Component {
  state = {
    A: [11, 21, 31, 41, 51, 61, 71, 81],
    API: [],
    xyx: [],

    objArray: [
      {
        x: "klsjd",
        y: 3
      },
      {
        x: "iou",
        y: 8
      },
      {
        x: "werpo",
        y: 9
      }
    ]
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.onClickButton}> Button</button>
        </div>
        <div>
          <button onClick={this.onClickApi}> API</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>array</th>
            </tr>
          </thead>
          <tbody>{this.state.xyx}</tbody>
        </table>
        <div>{this.state.API}</div>
      </div>
    );
  }
  onClickButton = () => {
    // Destructring
    const { objArray } = this.state;
    // console.log("B length: ", B.length);
    // for (var i = 0; i <= B.length - 1; i++) {
    //   console.log(B[i]);
    // }

    const arrayToRender = objArray.map(ele => {
      console.log(ele);
      let elementToRender = (
        <tr key={ele.y}>
          <td>{ele.x}</td>
          <td>{ele.y}</td>
        </tr>
      );

      return elementToRender;
    });

    this.setState({ xyx: arrayToRender });

    // console.log("button clicked", arrayToRender);
  };
  onClickApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        // this.setState({ API: json });
      });
  };
}
