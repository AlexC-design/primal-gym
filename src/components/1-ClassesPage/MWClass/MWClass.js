import React from "react";
import "./mwclass.css";

const MWClass = ({ title, mainImage, debrisImage }) => {
  return (
      <div classname="class-container">
        <img className={`${title}-main`} src={mainImage} alt="main" />
        <img className={`${title}-debris`} src={debrisImage} alt="debris" />
      </div>
  );
};

export default MWClass;
