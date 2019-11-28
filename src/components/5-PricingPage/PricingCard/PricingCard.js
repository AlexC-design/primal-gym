import React from "react";
import renderCardInfo from "./renderCardInfo";
import "./pricing-card.css";

const PricingCard = ({ number }) => {
  return (
    <div className="pricing-card-container">
      {renderCardInfo(number)}
      <button className="pricing-button">GET NOW</button>
    </div>
  );
};

export default PricingCard;
