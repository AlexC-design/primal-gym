import React, { Component } from "react";
import "./menu-list.css";

export default class MenuList extends Component {
  render() {
    return (
      <div className={`menu-list ${this.props.menuState}`}>
        <a onClick={this.props.changeMenuState} href="#home">
          Home
        </a>

        <a onClick={this.props.changeMenuState} href="#about">
          About us
        </a>

        <a onClick={this.props.changeMenuState} href="#classes">
          Classes
        </a>

        <a onClick={this.props.changeMenuState} href="#trainers">
          Trainers
        </a>

        <a onClick={this.props.changeMenuState} href="#pricing">
          Pricing
        </a>
      </div>
    );
  }
}
