import React from "react";
import About from "./About/About";
import AboutUs from "../Shared/AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <AboutUs />
      <About />
    </div>
  );
};

export default Home;
