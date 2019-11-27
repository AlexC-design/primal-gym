import React from "react";
import arrowSmall from "../../../assets/images/arrows/arrow-small.png";
import threeDots from "../../../assets/images/arrows/three-dots.png";

const renderTrainerInfo = trainerNumber => {
  switch (trainerNumber) {
    case "1":
      return (
        <div className="trainer-info">
          <div className="trainer-name-and-spec">
            <div className="trainer-name">
              <img src={arrowSmall} alt="arrow small" />
              <h1>LIAM STRONG</h1>
              <img
                src={arrowSmall}
                className="arrow-small-flipped"
                alt="arrow small"
              />
            </div>
            <div className="trainer-specialization">
              <img src={threeDots} alt="three dots" />
              <h2>SPECIALIZATION - CROSSFIT</h2>
              <img src={threeDots} alt="three dots" />
            </div>
          </div>
          <div className="trainer-quote">
            <p>
              “Making ordinary people do the extraordinary is why I do this job.
              Watching clients start out thinking they can't, and seeing their
              reaction when they do, is awesome. Strength training should be
              inclusive for everyone, not just big lifters. Everyone has their
              own starting point and I love to help people progress in strength,
              and confidence. “
            </p>
          </div>
        </div>
      );
    case "2":
      return (
        <div className="trainer-info reversed">
          <div className="trainer-name-and-spec">
            <div className="trainer-name">
              <img src={arrowSmall} alt="arrow small" />
              <h1>MARK SAVAGE</h1>
              <img
                src={arrowSmall}
                className="arrow-small-flipped"
                alt="arrow small"
              />
            </div>
            <div className="trainer-specialization">
              <img src={threeDots} alt="three dots" />
              <h2>SPECIALIZATION - WEIGHTLIFTING</h2>
              <img src={threeDots} alt="three dots" />
            </div>
          </div>
          <div className="trainer-quote">
            <p>
              "That'll do"
              <br />
              will never do! As someone who is a bit picky, I want the best from
              everyone, myself included. I want to influence the people I work
              with to actually care about becoming a better version of
              themselves. Getting to help clients hit their own personal
              milestones, and feel good about themselves will always be a great
              reason to come to work.
            </p>
          </div>
        </div>
      );
    case "3":
      return (
        <div className="trainer-info">
          <div className="trainer-name-and-spec">
            <div className="trainer-name">
              <img src={arrowSmall} alt="arrow small" />
              <h1>MIA FIT</h1>
              <img
                src={arrowSmall}
                className="arrow-small-flipped"
                alt="arrow small"
              />
            </div>
            <div className="trainer-specialization">
              <img src={threeDots} alt="three dots" />
              <h2>SPECIALIZATION - YOGA</h2>
              <img src={threeDots} alt="three dots" />
            </div>
          </div>
          <div className="trainer-quote">
            <p>
              “My mission is to help people enjoy longer, healthier lives by
              finding a sustainable balance of good nutrition, good movement and
              strength. For me, happiness is being alive and well for as long as
              possible. Keeping strong and eating well has enabled me to keep
              enjoying my lifelong love of outdoor activities. My ultimate goal
              is to still be snowboarding at the age of 90!”
            </p>
          </div>
        </div>
      );
    default:
      return <div>trainer info not found</div>;
  }
};

export default renderTrainerInfo;
