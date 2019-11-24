import React from "react";
import Logo from "./Logo/Logo";
import "../css/style.css";
import Logotype from "./Logotype/Logotype";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Logo />
      <Logotype />
      <h1>Where fitness comes naturally</h1>
    </div>
  );
};

export default LandingPage;
