import React from "react";
import "./arrow-separator.css";
import arrowHeadOne from "../../../assets/images/arrows/arrow-head-1.png";
import arrowBody from "../../../assets/images/arrows/arrow-body.png";

const ArrowSeparator = ({ title }) => {
  return (
    <div className="container">
      <div className="arrows">
        <div className="arrow arrow-left">
          <img src={arrowHeadOne} className="arrow-head-1" alt="arrow-head-1" />
          <img src={arrowBody} className="arrow-body" alt="arrow-body" />
        </div>
        <h1 className="page-title">{title}</h1>
        <div className="arrow arrow-right">
          <img src={arrowBody} className="arrow-body" alt="arrow-body" />
          <img src={arrowHeadOne} className="arrow-head-1" alt="arrow-head-1" />
        </div>
      </div>
    </div>
  );
};

export default ArrowSeparator;
