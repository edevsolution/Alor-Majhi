import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Gallery from "../Shared/Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About />
      <Gallery></Gallery>
      <Testimonial />
    </div>
  );
};

export default Home;
