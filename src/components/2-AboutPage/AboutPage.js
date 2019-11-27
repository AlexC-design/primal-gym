import React from "react";
import ArrowSeparator from "../~re-usables/ArrowSeparator/ArrowSeparator";
import aboutUsBG from "../../assets/images/about-us-bg.jpg";
import "./about-page.css";
import AboutCard from "./AboutCard/AboutCard";

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <section id="about">
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
          <div className="about-page-background">
            <img src={aboutUsBG} alt="about-us-bg" />
            <img src={aboutUsBG} alt="about-us-bg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
