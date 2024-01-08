import axios from "axios";
import React, { Component } from "react";
import Country from "./Country";

class Countries extends Component {
  constructor() {
    super();
    this.state = {
      countryData: [],
      loading: true,
      currentPage: 1,
      postPerPage: 8,
    };
  }

  componentDidMount() {
    setTimeout(async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      console.log(response);
      if (response.status === 200)
        this.setState({ countryData: response.data });
    }, 2000);
  }

  render() {
    const { countryData } = this.state;
    return (
      <div className="country_container">
        <Country countryData={countryData} />
      </div>
    );
  }
}

export default Countries;
