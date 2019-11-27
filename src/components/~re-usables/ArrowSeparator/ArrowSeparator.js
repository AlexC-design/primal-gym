import React from "react";
import "./arrow-separator.css";
import arrowHeadOne from "../../../assets/images/arrows/arrow-head-1.png";
import arrowBody from "../../../assets/images/arrows/arrow-body.png";

const ArrowSeparator = ({ title }) => {
  return (
    <div className={`arrows-container-bg ${title}`}>
      <div className="arrows-container">
        <div className={`arrows ${title === "" ? "empty" : null}`}>
          <div className="arrow arrow-left">
            <img
              src={arrowHeadOne}
              className="arrow-head-1"
              alt="arrow-head-1"
            />
            <img src={arrowBody} className="arrow-body" alt="arrow-body" />
          </div>
          <div className={`page-title-${title === "" ? "empty" : "fill"}`}>
            <h1>{title}</h1>
          </div>
          <div className="arrow arrow-right">
            <img src={arrowBody} className="arrow-body" alt="arrow-body" />
            <img
              src={arrowHeadOne}
              className="arrow-head-1"
              alt="arrow-head-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrowSeparator;
