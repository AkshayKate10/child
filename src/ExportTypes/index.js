import React, { Component } from "react";

// named import
import { name, number, city } from "./TypesOfExport";

// Default export
// no {} for import
// don't have to use the exact exported name. Any valid variable name will work.
import jj from "./DefaultExport";

export default class ExportTypes extends Component {
  render() {
    return (
      <div>
        <div>Simple Export</div>
        {jj.name}
      </div>
    );
  }
}
