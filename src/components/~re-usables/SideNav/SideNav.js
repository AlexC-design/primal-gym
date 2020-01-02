import React, { useEffect, useState } from "react";
import homeIcon from "../../../assets/images/sidenav/home-icon.svg";
import pageIcon from "../../../assets/images/sidenav/page-icon.svg";
import "./side-nav.css";

export const SideNav = ({ scrollPosition }) => {
  const [pageIndex, setPageIndex] = useState(0);

  const indexToPosition = {
    0: "15",
    1: "62",
    2: "114",
    3: "166",
    4: "218"
  };

  useEffect(() => {
    let mainNavLinks = document.querySelectorAll("ul li a");

    mainNavLinks.forEach((link, index) => {
      let section = document.querySelector(link.hash);

      if (section !== null) {
        if (
          section.offsetTop <= scrollPosition + 300 &&
          section.offsetTop + section.offsetHeight - 300 > scrollPosition
        ) {
          setPageIndex(index);
        }
      }
    });
  }, [scrollPosition]);

  return (
    <div className="sidenav-container">
      <a href="#home">
        <img className="home-icon" src={homeIcon} alt="home icon" />
      </a>
      <a href="#about">
        <img src={pageIcon} alt="page icon" />
      </a>
      <a href="#classes">
        <img src={pageIcon} alt="page icon" />
      </a>
      <a href="#trainers">
        <img src={pageIcon} alt="page icon" />
      </a>
      <a href="#pricing">
        <img src={pageIcon} alt="page icon" />
      </a>
      <div
        className="red-dot"
        style={{ top: `${indexToPosition[pageIndex]}px` }}
      />
    </div>
  );
};
