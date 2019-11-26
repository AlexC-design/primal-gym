import React, { useState, useEffect } from "react";
import "../../css/style.css";

const Navbar = ({ scrollPosition }) => {

  const [size, setSize] = useState("large");

  useEffect(() => {
    scrollPosition === 0 ? setSize("large") : setSize("small");
  });

  return (
    <div>
      <div className={`${size} container`}>
        <div className="flex-eq"></div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Classes</a>
          </li>
          <li>
            <a href="#">Trainers</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
        <button className="btn-login">Log In</button>
      </div>
      <div className={`navbg-${size}`}></div>
    </div>
  );
};

export default Navbar;
