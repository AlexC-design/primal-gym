import React from "react";
import arrowBody from "../../../assets/images/arrows/arrow-body.png";
import arrowBodyVertical from "../../../assets/images/arrows/arrow-body-vertical.png";
import renderSocialIcons from "./renderSocialIcons";

const borderEdges = trainerNumber => {
  return (
    <div className="border-edges">
      <img className="border-edge-top" src={arrowBody} alt="border edge" />
      <img
        className={`border-edge-bot ${
          trainerNumber % 2 === 0 ? "reversed" : ""
        }`}
        src={arrowBody}
        alt="border edge"
      />
      <img
        className={`border-edge-left ${
          trainerNumber % 2 === 0 ? "reversed" : ""
        }`}
        src={arrowBodyVertical}
        alt="border edge"
      />
      <img
        className={`border-edge-right ${
          trainerNumber % 2 === 0 ? "reversed" : ""
        }`}
        src={arrowBodyVertical}
        alt="border edge"
      />
      {renderSocialIcons(trainerNumber)}
    </div>
  );
};

export default borderEdges;
