import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }
  ss;

  componentDidUpdate(prevProps) {
    if (prevProps.focusedIndex !== this.props.focusedIndex) {
      if (this.divRef.current) {
        // this.divRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  render() {
    const { fillterResult, focusedIndex } = this.props;
    console.log(fillterResult);
    return (
      <div className="absolute top-12 left-0 right-0 bg-[#ffffff] shadow max-h-52 overflow-y-auto search_bar rounded ">
        <ul className="flex flex-col  py-2">
          {fillterResult &&
            fillterResult.map(
              (searchCountry, index) => (
                <Link
                  ref={index === focusedIndex ? this.divRef : null}
                  to={`countrydetails/${searchCountry.name.common}`}
                  key={searchCountry.name.common}
                  className={`px-2  hover:bg-slate-200 py-2 flex items-center justify-between text-[0.8rem] ${
                    index === focusedIndex ? "bg-slate-200" : ""
                  }`}
                >
                  <li>{searchCountry.name.common}</li>
                  <figure className="max-w-[3rem] h-[1.8rem]">
                    <img
                      src={searchCountry.flags.png}
                      alt=""
                      className="h-[100%] object-cover"
                    />
                  </figure>
                </Link>
              )
              // console.log(searchCountry)
            )}
        </ul>
      </div>
    );
  }
}

export default Search;
