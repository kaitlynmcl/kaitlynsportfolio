import React from "react";
import { Element } from "react-scroll";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Works from "./components/works";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__wrapper">
        <Element className="about section" name="section-1" id="about">
          <About />
        </Element>
        <Element className="works section" name="section-2" id="works">
          <Works />
        </Element>
        <Element className="contact section" name="section-3" id="contact">
          <Contact />
        </Element>
      </div>
      <Footer />
    </div>
  );
};

export default App;
