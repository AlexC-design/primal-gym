import React, { Component } from "react";
import "./menu-button.css";

export default class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonState: "burger" };
  }

  changeButtonState = () => {
    if (this.state.buttonState === "burger") {
      this.setState({ buttonState: "cross" });
    } else {
      this.setState({ buttonState: "burger" });
    }
  };

  componentDidUpdate() {}

  render() {
    return (
      <div
        className={`menu-button ${this.state.buttonState}${
          this.props.scroll > 200 ? " small" : ""
        }`}
        onClick={this.changeButtonState}
      >
        <div className="first line" />
        <div className="second line" />
        <div className="third line" />
      </div>
    );
  }
}
