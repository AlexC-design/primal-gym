import React from "react";
import yt from "../../../assets/images/social-media/yt.png";
import fb from "../../../assets/images/social-media/fb.png";
import ig from "../../../assets/images/social-media/ig.png";
import ytA from "../../../assets/images/social-media/yt-a.png";
import fbA from "../../../assets/images/social-media/fb-a.png";
import igA from "../../../assets/images/social-media/ig-a.png";

const renderSocialIcons = trainerNumber => {
  return (
    <div
      className={`social-icons-container ${
        trainerNumber % 2 === 0 ? "reversed" : ""
      } `}
    >
      <div className="social-icon yt">
        <img className="social-icon-inactive" src={yt} alt="youtube icon" />
        <img
          className="social-icon-active"
          src={ytA}
          alt="youtube icon active"
        />
      </div>
      <div className="social-icon ig">
        <img className="social-icon-inactive" src={ig} alt="instagram icon" />
        <img
          className="social-icon-active"
          src={igA}
          alt="instagram icon active"
        />
      </div>
      <div className="social-icon fb">
        <img className="social-icon-inactive" src={fb} alt="facebook icon" />
        <img
          className="social-icon-active"
          src={fbA}
          alt="facebook icon active"
        />
      </div>
    </div>
  );
};

export default renderSocialIcons;
