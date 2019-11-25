import React from "react";
import "../../css/style.css";

const Navbar = () => {
  return (
    <div className="navbar container">
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
  );
};

export default Navbar;
