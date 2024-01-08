import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Country from "./Country";
import axios from "axios";

export const RegionFilterWrapper = () => {
  const { name: region } = useParams();
  return <FillterByRegion name={region} />;
};
class FillterByRegion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterByRegion: [],
    };
  }

  async componentDidMount() {
    const { name } = this.props;
    var res = await axios.get("https://restcountries.com/v3.1/region/" + name);
    console.log(res);
    if (res.status === 200) this.setState({ filterByRegion: res.data });
  }

  async componentDidUpdate(prevProps) {
    const { name } = this.props;
    console.log(prevProps.name);
    if (prevProps.name !== name) {
      var res = await axios.get(
        "https://restcountries.com/v3.1/region/" + name
      );
      if (res.status === 200) this.setState({ filterByRegion: res.data });
    }
  }

  render() {
    const { filterByRegion } = this.state;
    return (
      <div className="region_filter">
        <Country countryData={filterByRegion} />
      </div>
    );
  }
}

export default FillterByRegion;
