import React from "react";
import MenClass from "./MenClass/MenClass";
import ArrowSeparator from "../~re-usables/ArrowSeparator/ArrowSeparator";

const ClassesPage = () => {
  return (
    <div className="classes-page">
      <ArrowSeparator title="CLASSES" />
      <MenClass />
    </div>
  );
};

export default ClassesPage;
