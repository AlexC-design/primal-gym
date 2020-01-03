import React, { Component } from "react";
import "./menu-button.css";

export default class MenuButton extends Component {
  render() {
    return (
      <div
        className={`menu-button ${this.props.buttonState}${
          this.props.scroll > 200 ? " small" : ""
        }`}
      >
        <div className="first line" />
        <div className="second line" />
        <div className="third line" />
      </div>
    );
  }
}
