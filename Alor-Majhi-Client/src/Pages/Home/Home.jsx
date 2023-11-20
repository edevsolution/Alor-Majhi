
import React from 'react';
import Contact from '../Contact/Contact';
import About from "./About/About";
import Banner from "./Banner/Banner";
import Testimonial from "../../Components/Testimonial/Testimonial";
import JoinUs from './JoinUs/JoinUs';
import Gallery from "../Shared/Gallery/Gallery";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About />
       <Gallery></Gallery>
            <Testimonial />
            <JoinUs></JoinUs>
            <Contact />
        </div>
    );
};

export default Home;
