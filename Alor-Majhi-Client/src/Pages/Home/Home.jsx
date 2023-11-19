import React from 'react';
import Contact from '../Contact/Contact';
import About from "./About/About";
import Banner from './Banner/Banner';
import Testimonial from "../../Components/Testimonial/Testimonial";
import JoinUs from './JoinUs/JoinUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About />
            <Testimonial />
            <JoinUs></JoinUs>
            <Contact />
        </div>
    );
};

export default Home;
