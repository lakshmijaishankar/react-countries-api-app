import React, { Component } from "react";
import Card from "../card/Card";

class Country extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     countryData: []
    // }
  }

  // componentDidUpdate(prevProps) {
  //     if (prevProps.countryData != this.props.countryData) {
  //         this.setState({ countryData: this.props.countryData })
  //     }
  // }

  // componentDidMount() {
  //     this.setState({ countryData: this.props.countryData })
  // }

  render() {
    const { countryData } = this.props;
    // console.log(countryData)
    return (
      <div className="countrylist_container grid grid-cols-[repeat(4,minmax(auto,230px))] overscroll-none gap-y-10 justify-between mt-9">
        {countryData?.map((data) => (
          <Card data={data} key={data.name?.common} />
        ))}
      </div>
    );
  }
}

export default Country;
