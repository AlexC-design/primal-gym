import React, { useState, useEffect } from "react";
import logo from "../../../assets/images/logo.png";


const Logo = ({ scrollPosition }) => {
  const [size, setSize] = useState("large");

  useEffect(() => {
    scrollPosition < 200 ? setSize("large") : setSize("small");
  }, [scrollPosition]);

  return (
    <div className={`logo-${size}`}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
