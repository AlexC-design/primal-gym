import React from "react";
import "./about-card.css";
import iconList from "./ImportIcons";
import renderText from "./renderText";

const AboutCard = ({ number }) => {
  return (
    <div>
      <div className="about-card">
        <img
          className={`icon icon-${number}`}
          src={iconList[number]}
          alt={`icon-${number}`}
        />
        <div className="about-card-text">{renderText(number)}</div>
      </div>
    </div>
  );
};

export default AboutCard;
