import React from 'react';
import Contact from '../Contact/Contact';
import About from "./About/About";
import Banner from './Banner/Banner';
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;
