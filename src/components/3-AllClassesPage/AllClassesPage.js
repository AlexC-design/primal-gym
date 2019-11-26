import React from "react";
import ClassCard from "./ClassCard/ClassCard";
import "./all-classes-page.css";
import ArrowSeparator from "../~re-usables/ArrowSeparator/ArrowSeparator";

const AllClassesPage = () => {
  return (
    <div className="all-classes-container">
      <ArrowSeparator title="CLASSES" />
      <div className="classes-cards-container">
        <div className="classes-cards-top">
          <ClassCard classNumber="1" />
          <ClassCard />
        </div>
        <div className="classes-cards-bottom">
          <ClassCard />
          <ClassCard />
        </div>
      </div>
    </div>
  );
};

export default AllClassesPage;
