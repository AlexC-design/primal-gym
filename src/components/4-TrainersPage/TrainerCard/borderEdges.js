import React from "react";
import arrowBody from "../../../assets/images/arrows/arrow-body.png";
import arrowBodyVertical from "../../../assets/images/arrows/arrow-body-vertical.png";
import renderSocialIcons from "./renderSocialIcons";

const borderEdges = () => {
  return (
    <div className="border-edges">
      <img className="border-edge-top" src={arrowBody} alt="border edge" />
      <img className="border-edge-bot" src={arrowBody} alt="border edge" />
      <img
        className="border-edge-left"
        src={arrowBodyVertical}
        alt="border edge"
      />
      <img
        className="border-edge-right"
        src={arrowBodyVertical}
        alt="border edge"
      />
      {renderSocialIcons()}
    </div>
  );
};

export default borderEdges;
