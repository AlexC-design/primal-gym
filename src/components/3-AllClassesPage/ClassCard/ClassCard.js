import React from "react";
import classBorder from "../../../assets/images/classes-page/class-border.png";
import borderBottom from "../../../assets/images/arrows/arrow-body.png";
import "./class-card.css";
import classesList from "./classImagesImport";
import renderSchedule from "./renderSchedule";
import renderClassName from "./renderClassName";

const ClassCard = ({ classNumber }) => {
  return (
    <div className="hover-show-button">
      <div className="class-card-container">
        <div className="class-border">
          <img src={classBorder} alt="class-border" />
          
          <img
            className="class-image"
            src={classesList[classNumber]}
            alt={`class-${classNumber}`}
          />
          {renderClassName(classNumber)}
          <img
            className="border-bottom"
            src={borderBottom}
            alt="border-bottom"
          />
          <div className="class-schedule-overlay">
            {renderSchedule(classNumber)}
          </div>
        </div>
      </div>
      <button className="btn-class-join">JOIN NOW</button>
    </div>
  );
};

export default ClassCard;
