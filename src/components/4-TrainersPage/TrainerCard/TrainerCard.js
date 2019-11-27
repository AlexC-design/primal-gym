import React from "react";
import trainersList from "./trainersList";
import renderTrainerInfo from "./renderTrainerInfo";
import "./trainer-card.css";

const TrainerCard = ({ trainerNumber }) => {
  if (trainerNumber % 2 !== 0) {
    return (
      <div className="trainer-section-fill">
        <div className="trainer-side-fill"></div>
        <div
          className="trainer-section-container"
          id={`trainer${trainerNumber}`}
        >
          <div className="trainer-top-black"></div>
          <div className="trainer-bottom-container">
            <div className="trainer-bot-left"></div>
            <div className="trainer-bot-mid">
              <div className="trainer-image">
                <img
                  src={trainersList[trainerNumber]}
                  alt={`trainer-image-${trainerNumber}`}
                />
              </div>
              {renderTrainerInfo(trainerNumber)}
            </div>
            <div className="trainer-bot-right"></div>
          </div>
          <div className="trainer-below-black"></div>
        </div>
        <div className="trainer-side-fill"></div>
      </div>
    );
  } else {
    return (
      <div className="trainer-section-fill">
        <div className="trainer-side-fill"></div>
        <div
          className="trainer-section-container"
          id={`trainer${trainerNumber}`}
        >
          <div className="trainer-top-black"></div>
          <div className="trainer-bottom-container">
            <div className="trainer-bot-left"></div>
            <div className="trainer-bot-mid">
              <div className="trainer-image reversed">
                <img
                  src={trainersList[trainerNumber]}
                  alt={`trainer-image-${trainerNumber}`}
                />
              </div>
              {renderTrainerInfo(trainerNumber)}
            </div>
            <div className="trainer-bot-right"></div>
          </div>
          <div className="trainer-below-black"></div>
        </div>
        <div className="trainer-side-fill"></div>
      </div>
    );
  }
};

export default TrainerCard;
