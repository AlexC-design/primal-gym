import React, { Component } from "react";
import "./mobile-menu.css";
import MenuButton from "./MenuButton/MenuButton";
import MenuList from "./MenuList/MenuList";

export default class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { menuState: "closed" };
  }

  changeMenuState = () => {
    if (this.state.menuState === "closed") {
      this.setState({ menuState: "open" });
    } else {
      this.setState({ menuState: "closed" });
    }
  };
  render() {
    return (
      <>
        <div onClick={this.changeMenuState}>
          <MenuButton
            scroll={this.props.scroll}
            buttonState={this.state.menuState}
          />
        </div>
        <MenuList
          menuState={this.state.menuState}
          changeMenuState={this.changeMenuState}
        />
      </>
    );
  }
}
