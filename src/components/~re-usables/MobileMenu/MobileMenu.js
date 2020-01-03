import React, { Component } from "react";
import "./mobile-menu.css";
import MenuButton from "./MenuButton/MenuButton";

export default class MobileMenu extends Component {
  render() {
    return <MenuButton scroll={this.props.scroll} />;
  }
}
