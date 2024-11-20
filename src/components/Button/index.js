import React from "react";
import "./style.css";

const Button = ({
  label,
  info,
  iconURL,
  handleClick,
  cssStyling,
  isDisabled,
}) => {
  return (
    <div className="tooltip">
      <button
        className={`genBtn ${cssStyling} ${isDisabled ? "btnDisabled" : "btnActive"}`}
        onClick={handleClick}
        disabled={isDisabled}
        aria-label={`${label} activity button`}
      >
        {iconURL ? (
          <img src={iconURL} alt={label} className="iconBtn" />
        ) : (
          <span className="textBtn">{label}</span>
        )}
      </button>
      <span className="tooltiptext">{info}</span>
    </div>
  );
};

export default Button;
