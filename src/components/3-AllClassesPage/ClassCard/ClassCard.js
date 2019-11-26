import React from "react";
import classBorder from "../../../assets/images/classes-page/class-border.png";
import borderBottom from "../../../assets/images/arrows/arrow-body.png";
import "./class-card.css";
import classesList from "./classImagesImport";

const ClassCard = ({ classNumber }) => {
  return (
    <div className="class-card-container">
      <div className="class-border">
        <img className="border-top" src={classBorder} alt="class-border" />
        <img className="border-bottom" src={borderBottom} alt="border-bottom" />
      </div>
      <img
        className="class-image"
        src={classesList[classNumber]}
        alt={`class-${classNumber}`}
      />
    </div>
  );
};

export default ClassCard;
