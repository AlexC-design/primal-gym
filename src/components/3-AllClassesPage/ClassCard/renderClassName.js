import React from "react";

const renderClassName = classNumber => {
  switch (classNumber) {
    case "1":
      return <h1 className="class-name">BOXING</h1>;
    case "2":
      return <h1 className="class-name">YOGA</h1>;
    case "3":
      return <h1 className="class-name">SWIMMING</h1>;
    case "4":
      return <h1 className="class-name">SPINNING</h1>;
    default:
      return <h1 className="class-name">no name found</h1>;
  }
};

export default renderClassName;
