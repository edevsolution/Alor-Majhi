
import React from "react";
import About from "./About/About";
import Banner from './Banner/Banner';
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
       <About />
           <Testimonial/>
        </div>
    );
};

export default Home;
