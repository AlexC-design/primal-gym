import React from "react";
import "./vertical-separator.css";
import arrowVerticalOne from "../../../assets/images/arrows/arrow-vertical-1.png";
import arrowBodyVertical from "../../../assets/images/arrows/arrow-body-vertical.png";

const VerticalSeparator = () => {
  return (
    <div className="vertical-arrow">
      <img className="arrow-body-vertical" src={arrowBodyVertical} alt="arrow-body" />
      <img
        className="arrow-vertical-one"
        src={arrowVerticalOne}
        alt="arrow-vertical-1"
      />
    </div>
  );
};

export default VerticalSeparator;
