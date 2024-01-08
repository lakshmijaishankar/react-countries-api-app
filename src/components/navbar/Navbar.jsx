import React, { Component } from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { themeChage, handleThemeChange } = this.props;
    return (
      <div
        className={`navbar_container ${
          themeChage
            ? "bg-[#202c37] text-[#ffffff]"
            : "bg-[#ffffff] text-[#202c37]"
        } sticky top-0 z-[1] shadow`}
      >
        <nav
          className={`flex  text-[1.2rem] justify-between items-center px-12 h-14`}
        >
          <div className="heading">
            <h1 className="first-letter:capitalize font-bold worl">
              where in the world?
            </h1>
          </div>
          <div className="theme_change flex items-center space-x-2 cursor-pointer">
            <figure className="moon_svg" onClick={handleThemeChange}>
              {themeChage ? <BsMoonFill /> : <BsMoon />}
            </figure>
            <div className="dark-mode text-[1.1rem]">
              <span onClick={this.handleThemeChange}>Dark Mode</span>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
