import React from "react";
import Contact from "../Contact/Contact";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Testimonial from "../../Components/Testimonial/Testimonial";
import JoinUs from "./JoinUs/JoinUs";
import Gallery from "../Shared/Gallery/Gallery";
import EventTab from "../Shared/Event/EventTab";
import ContactUs from "../Contact/Contact";
import UnderBanner from "./Banner/UnderBanner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <UnderBanner />
      <About />
      {/* <Gallery></Gallery> */}
      <Testimonial />
      <ContactUs />
      <JoinUs></JoinUs>
    </div>
  );
};

export default Home;
