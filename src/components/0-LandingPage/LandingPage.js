import React from "react";
import Logo from "./Logo/Logo";
import "../css/style.css";
import Logotype from "./Logotype/Logotype";
import Navbar from "./Navbar/Navbar";

const LandingPage = ({ scrollPosition }) => {
  
  return (
    <div className="landing-page">
      <Navbar scrollPosition={scrollPosition} />
      <Logo scrollPosition={scrollPosition} />
      <Logotype />
      <h1>Where fitness comes naturally</h1>
      <button className="btn-join-main">Join Now</button>
      <div className="bg-image container"></div>
    </div>
  );
};

export default LandingPage;
