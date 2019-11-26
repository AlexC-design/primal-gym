import React, { useState, useEffect } from "react";
import logo from "../../../assets/images/logo.png";
import "../../css/style.css";

const Logo = ({ scrollPosition }) => {
  const [size, setSize] = useState("large");

  useEffect(() => {
    console.log(scrollPosition);
    scrollPosition === 0 ? setSize("large") : setSize("small");
    console.log(size);
  });

  return (
    <div className={`logo-${size}`}>
      <img src={logo} />
    </div>
  );
};

export default Logo;
