import React, { useEffect } from "react";
import ArrowSeparator from "../~re-usables/ArrowSeparator/ArrowSeparator";
import MWClass from "./MWClass/MWClass";
import classMen from "../../assets/images/classes-page/class-men.png";
import classMenDebris from "../../assets/images/classes-page/class-men-debris.png";
import classWomen from "../../assets/images/classes-page/class-women.png";
import classWomenDebris from "../../assets/images/classes-page/class-women-debris.png";
import "./classes-page.css";
import VerticalSeparator from "../~re-usables/VerticalSeparator/VerticalSeparator";
import renderTextLeft from "./renderTextLeft";
import renderTextRight from "./renderTextRight";
import revealImages from "../~re-usables/revealImages";

const ClassesPage = ({ scrollPosition }) => {
  useEffect(() => {
    revealImages(scrollPosition, ".classes-container", ".class-image-container", 900, 0);
  });

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
