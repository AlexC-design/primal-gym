import React from "react";
import ClassCard from "./ClassCard/ClassCard";
import "./all-classes-page.css";
import ArrowSeparator from "../~re-usables/ArrowSeparator/ArrowSeparator";

const AllClassesPage = () => {
  return (
    <div className="all-classes-container">
      <section id="classes">
        <ArrowSeparator title="CLASSES" />
        <div className="classes-cards-container">
          <div className="classes-cards-top">
            <ClassCard classNumber="1" />
            <ClassCard classNumber="2" />
          </div>
          <div className="classes-cards-bottom">
            <ClassCard classNumber="3" />
            <ClassCard classNumber="4" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllClassesPage;
