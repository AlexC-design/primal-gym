import React from "react";
import PricingCard from "./PricingCard/PricingCard";
import ArrowSeparator from "../~re-usables/ArrowSeparator/ArrowSeparator";
import "./pricing-page.css";

const PricingPage = () => {
  return (
    <div className="pricing-page-container">
      <ArrowSeparator title="PRICING" />
      <div className="pricing-cards-container">
        <PricingCard number="1" />
        <PricingCard number="2" />
        <PricingCard number="3" />
      </div>
    </div>
  );
};

export default PricingPage;
