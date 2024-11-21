import React from "react";
import "./style.css";

const Button = ({ label, handleClick, isDisabled = false }) => {
  return (
    <button
      className={`actionBtn ${isDisabled ? "btnDisabled" : ""}`}
      onClick={handleClick}
      disabled={isDisabled}
      aria-label={`${label} activity button`}
    >
      {label}
    </button>
  );
};

export default Button;
