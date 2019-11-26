import React from "react";
import ArrowSeparator from "../~re-usables/ArrowSeparator/ArrowSeparator";
import MWClass from "./MWClass/MWClass";
import classMen from "../../assets/images/classes-page/class-men.png";
import classMenDebris from "../../assets/images/classes-page/class-men-debris.png";
import classWomen from "../../assets/images/classes-page/class-women.png";
import classWomenDebris from "../../assets/images/classes-page/class-women-debris.png";
import "./classes-page.css";
import VerticalSeparator from "../~re-usables/VerticalSeparator/VerticalSeparator";

const ClassesPage = () => {
  const renderTextLeft = () => {
    return (
      <div className="text left">
        <h1>MEN'S CLASS</h1>
        <h4>CROSSFIT</h4>
        <p>
          High intensity all-round training incorporating elements from various
          workout and fitness areas
        </p>
        <h4>BODYBUILDING</h4>
        <p>
          Train along world class experts in the field and learn the secrets of
          progressive resistance from the best of the best
        </p>
        <h4>WEIGHT LIFTING</h4>
        <p>
          What makes a weightlifting program successful? Your hard work and
          dedication
        </p>
      </div>
    );
  };
  const renderTextRight = () => {
    return (
      <div className="text right">
        <h1>WOMEN'S CLASS</h1>
        <h4>CARDIO</h4>
        <p>
          Get fitter and burn calories. These classes are for anyone that loves
          music and energy
        </p>
        <h4>SCULPT AND TONE</h4>
        <p>
          Change the shape of your body by strengthening and conditioning your
          muscles
        </p>
        <h4>MIND AND BODY</h4>
        <p>
          All rounder classes for wellbeing, core strength, flexibility and low
          impact conditioning
        </p>
      </div>
    );
  };

  return (
    <div className="classes-page">
      <div className="higher-shadow" />
      <VerticalSeparator />
      <ArrowSeparator title="" />
      <div className="classes-container">
        <div className="lower-shadow" />
        <MWClass
          title="men"
          mainImage={classMen}
          debrisImage={classMenDebris}
        />

        <MWClass
          title="women"
          mainImage={classWomen}
          debrisImage={classWomenDebris}
        />
        <div className="glow-container">
          <div className="glow-men"></div>
          <div className="glow-women"></div>
        </div>
      </div>
      <div className="text-and-background">
        <div className="text-container">
          {renderTextLeft()}
          {renderTextRight()}
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
