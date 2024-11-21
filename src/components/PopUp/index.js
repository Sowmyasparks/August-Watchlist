import React, { useEffect } from "react";
import "./style.css";

const PopUp = ({ isOpen, info, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div className="popupWindowOverlay">
      <div className="popupWindow">
        <p>{info}</p>
      </div>
    </div>
  );
};

export default PopUp;
