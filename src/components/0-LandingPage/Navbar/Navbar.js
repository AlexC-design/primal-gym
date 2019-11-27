import React, { useState, useEffect } from "react";
import navItemsHighlight from "./navItemsHighlight";

const Navbar = ({ scrollPosition }) => {
  const [size, setSize] = useState("large");

  useEffect(() => {
    if (scrollPosition === 0) {
      setSize("large");
    } else if (size != "small") {
      setSize("small");
    }

    navItemsHighlight(scrollPosition);
  });

  return (
    <div>
      <div className={`${size} container`}>
        <div className="flex-eq"></div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#classes">Classes</a>
          </li>
          <li>
            <a href="#trainers">Trainers</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
        <button className="btn-login">Log In</button>
      </div>
      <div className={`navbg-${size}`}></div>
    </div>
  );
};

export default Navbar;
