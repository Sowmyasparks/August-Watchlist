import React, { useEffect } from "react";
import "./style.css";

const PopUp = ({ isOpen, info, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
      <div className="popoUpWindow">
        <p>{info}</p>
      </div>
  );
};

export default PopUp;
