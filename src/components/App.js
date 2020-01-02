import React from "react";
import LandingPage from "./0-LandingPage/LandingPage";
import ClassesPage from "./1-ClassesPage/ClassesPage";
import AboutPage from "./2-AboutPage/AboutPage";
import AllClassesPage from "./3-AllClassesPage/AllClassesPage";
import TrainersPage from "./4-TrainersPage/TrainersPage";
import PricingPage from "./5-PricingPage/PricingPage";
import { SideNav } from "./~re-usables/SideNav/SideNav";
import { Footer } from "./6-Footer/Footer";

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
      <>
        <SideNav scrollPosition={this.state.scroll} />
        <section id="home">
          <LandingPage scrollPosition={this.state.scroll} />
          <ClassesPage scrollPosition={this.state.scroll} />
        </section>
        <AboutPage />
        <AllClassesPage />
        <TrainersPage scrollPosition={this.state.scroll} />
        <PricingPage />
        <Footer />
      </>
    );
  }
}

export default App;
