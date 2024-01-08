import React, { Component } from "react";

class TextField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { placeholder, type, className, onFocus, onChange, onBlur, value } =
      this.props;
    // console.log(this.props)
    return (
      // <div className="text-field">
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
      />
      // </div>
    );
  }
}

export default TextField;
