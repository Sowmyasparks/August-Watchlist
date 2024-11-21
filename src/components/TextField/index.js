import React from "react";
import "./style.css";
const TextField = ({ searchInput, placeholder, onChange, onEnter }) => {
  return (
    <input
      id={placeholder}
      type="text"
      className="textField"
      placeholder={placeholder}
      onKeyDown={onEnter}
      onChange={onChange}
      aria-label={placeholder}
      value={searchInput}
    />
  );
};
export default TextField;
