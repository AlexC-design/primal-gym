import React from "react";
import ArrowSeparator from "../~re-usables/ArrowSeparator/ArrowSeparator";
import "./about-page.css";
import AboutCard from "./AboutCard/AboutCard";

const AboutPage = () => {
  return (
    <div>
      <div className="about-page-container">
        <ArrowSeparator title="WHAT WE OFFER" />
        <div className="about-columns">
          <div className="left-column">
            <AboutCard number="1" />
            <AboutCard number="2" />
            <AboutCard number="3" />
          </div>
          <div className="right-column">
            <AboutCard number="4" />
            <AboutCard number="5" />
            <AboutCard number="6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
