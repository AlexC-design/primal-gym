import React from "react";

const renderText = number => {
  switch (number) {
    case "1":
      return (
        <>
          <h1>PERSONAL COACHING</h1>
          <p>
            Assigned personal fitness coach Personalised programming Times that
            suit you
          </p>
        </>
      );
    case "2":
      return (
        <>
          <h1>BODY MAPPING</h1>
          <p>
            Understand your current stats, set goals with your dedicated
            trainer, have your progress mapped.
          </p>
        </>
      );
    case "3":
      return (
        <>
          <h1>BESPOKE FITNESS {`&`} NUTRITION</h1>
          <p>
            Get a bespoke training {`&`} nutrition plan that will transform your
            physique
          </p>
        </>
      );
    case "4":
      return (
        <>
          <h1>SUPPORT {`&`} MOTIVATION</h1>
          <p>
            Train with like-minded individuals who will support and motivate
            you.
          </p>
        </>
      );
    case "5":
      return (
        <>
          <h1>OPEN 24/7</h1>
          <p>Workout when it suits you. Day or Night</p>
        </>
      );
    case "6":
      return (
        <>
          <h1>GROUP PERSONAL TRAINING</h1>
          <p>Rated as one of the top group workouts in London</p>
        </>
      );
    default:
      return (
        <>
          <h1>NON EXISTENT</h1>
          <p>Non existent</p>
        </>
      );
  }
};

export default renderText;
