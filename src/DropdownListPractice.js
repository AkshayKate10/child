import React, { Component } from "react";

export default class DropdownListPractice extends Component {
  state = {
    countryApi: [],
    regionApi: [],
    cityApi: [],
    countryCode: ""
  };
  render() {
    return (
      <div>
        <div>Country Name</div>
        <div>
          <select onChange={this.onChangeCountryName}>
            {this.state.countryApi.map((x, index) => (
              <option value={x.code} key={x.code}>
                {x.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select onChange={this.onChangeRegion}>
            {this.state.regionApi.map((x, index) => (
              <option key={index}>{x.region}</option>
            ))}
          </select>
        </div>

        <div>
          <select onChange={this.onChangeCity}>
            {this.state.cityApi.map((x, index) => (
              <option key={index}>{x.city}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch(
      "http://battuta.medunes.net/api/country/all/?key=148f9575cdcec9457efb453784deecb0"
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ countryApi: json });
      });
  }

  onChangeCountryName = e => {
    this.setState({ countryCode: e.target.value }, () => {
      const { countryCode } = this.state;
    });

    const countryCode = e.target.value;
    // const url2 =
    //   "http://battuta.medunes.net/api/region/" +
    //   countryCode +
    //   "/all/?key=148f9575cdcec9457efb453784deecb0";

    const url = `http://battuta.medunes.net/api/region/${countryCode}/all/?key=148f9575cdcec9457efb453784deecb0`;

    // console.log("url: ", url);
    // console.log("url2: ", url2);
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({ regionApi: json });
        console.log(json);
      });
  };

  onChangeRegion = e => {
    const selectedRegion = e.target.value;
    const { countryCode } = this.state;

    this.setState({ selectedRegion });
    const url = `http://battuta.medunes.net/api/city/${countryCode}/search/?region=${selectedRegion}&key=148f9575cdcec9457efb453784deecb0`;

    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({ cityApi: json });
        console.log(json);
      })
      .catch(err => {
        console.log("city not available");
      });
  };
}
