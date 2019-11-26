import React from "react";
import LandingPage from "./0-LandingPage/LandingPage";
import ClassesPage from "./1-ClassesPage/ClassesPage";
import AboutPage from "./2-AboutPage/AboutPage";
import AllClassesPage from "./3-AllClassesPage/AllClassesPage";

class App extends React.Component {
  state = { scroll: 0 };

  componentDidMount() {
    this.getScrollPosition();
  }

  getScrollPosition() {
    window.addEventListener("scroll", () => {
      this.setState({ scroll: window.scrollY });
    });
  }

  render() {
    return (
      <div>
        <LandingPage scrollPosition={this.state.scroll} />
        <ClassesPage />
        <AboutPage />
        <AllClassesPage />
      </div>
    );
  }
}

export default App;
