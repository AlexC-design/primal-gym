import React, { useEffect } from "react";
import "./trainers-page.css";
import ArrowSeparator from "../~re-usables/ArrowSeparator/ArrowSeparator";
import TrainerCard from "./TrainerCard/TrainerCard";
import revealImages from "./revealImages";

const TrainersPage = ({ scrollPosition }) => {
  useEffect(() => {
    revealImages(scrollPosition);
  });

  return (
    <div className="trainers-page-container">
      <section id="trainers">
        <ArrowSeparator title="TRAINERS" />
        <TrainerCard trainerNumber="1" />
        <TrainerCard trainerNumber="2" />
        <TrainerCard trainerNumber="3" />
      </section>
    </div>
  );
};

export default TrainersPage;
