// Functional component
// Stateless component
// Presentational component

import React from "react";

const RenderNamesList = props =>
  props.namesList.map(ele => <div key={ele}>{ele}</div>);

export default RenderNamesList;

// export default class RenderNamesList extends Component {
//   render() {
//     console.log(this.props.namesList);
//     // destructuring
//     const { namesList } = this.props;

//     return (
//       <div>
//         {namesList.map(ele => (
//           <div key={ele}>{ele}</div>
//         ))}
//       </div>
//     );
//   }
// }
