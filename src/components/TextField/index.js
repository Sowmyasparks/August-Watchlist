import React from "react";
import "./style.css";
const TextField = ({ searchInput, placeholder, onChange, onEnter }) => {
  return (
    <input
      type="text"
      className="text_field"
      placeholder={placeholder}
      onKeyDown={onEnter}
      onChange={onChange}
      aria-label={placeholder}
      value={searchInput}
    />
  );
};
export default TextField;
