import React from "react";

const renderCardInfo = number => {
  switch (number) {
    case "1":
      return (
        <div className="pricing-card-info-container">
          <h1 className="pricing-card-title">PRIMAL BASIC</h1>
          <h2 className="pricing-card-subtitle"></h2>
          <ul className="pricing-card-perks">
            <li>Access to the Primal Facebook support group</li>
            <li>Unlimited access to all Primal Classes {`&`} Clubs</li>
            <li>Full gym access</li>
            <li>Access to Primal Health Seminars</li>
            <li>Primal Cook Book</li>
          </ul>
          <h1 className="pricing-card-price">45£/month</h1>
        </div>
      );
    case "2":
      return (
        <div className="pricing-card-info-container">
          <h1 className="pricing-card-title">PRIMAL PLUS</h1>
          <h2 className="pricing-card-subtitle">ALL BASIC PERKS PLUS:</h2>
          <ul className="pricing-card-perks">
            <li>
              Three small group personal training sessions per week with a
              Primal Coach
            </li>
            <li>Monthly personalised exercise programmes</li>
            <li>Monthly assessment and goals review</li>
          </ul>
          <h1 className="pricing-card-price">75£/month</h1>
        </div>
      );
    case "3":
      return (
        <div className="pricing-card-info-container">
          <h1 className="pricing-card-title">PRIMAL FULL</h1>
          <h2 className="pricing-card-subtitle">ALL PREVIOUS PERKS PLUS:</h2>
          <ul className="pricing-card-perks">
            <li>
              Nutrition {`&`} lifestyle coaching including fortnightly habits{" "}
              {`&`} food tracking
            </li>
            <li>
              Full physical assessment including posture, MSM, flexibility {`&`}
              InBody metrics
            </li>
            <li>
              Nutrition {`&`} lifestyle assessment including sleep quality and
              stress levels
            </li>
          </ul>
          <h1 className="pricing-card-price">125£/month</h1>
        </div>
      );
    default:
      return <div>card info not found</div>;
  }
};

export default renderCardInfo;
