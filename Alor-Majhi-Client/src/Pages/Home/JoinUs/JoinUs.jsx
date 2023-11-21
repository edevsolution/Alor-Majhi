import React from "react";
import { JackInTheBox } from "react-awesome-reveal";

const JoinUs = () => {
  return (
    <div>
      <div className="relative"> 
        <img className=" w-full h-[300px] object-cover" src="https://i.ibb.co/bLC1NGS/img1.jpg" alt="" />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="absolute top-20 md:top-[30%] md:left-[25%] text-center">
      <JackInTheBox>
          <h1 className="text-2xl md:text-6xl font-semibold text-white font-[arial] ">
          Become A Volunteer
          </h1>
          <p className="text-xl md:text-2xl font-medium my-5 text-yellow-50 font-[arial] ">Join with us and become real human being and make the world smile !!</p>
          <button className="px-4 py-2 border-2 text-sm md:text-lg font-medium bg-transparent text-white hover:border-2 hover:bg-yellow-500 hover:text-black font-[arial] ">
                  JOIN WITH US
                </button>
        </JackInTheBox>
      </div>
      </div>
    </div>
  );
};

export default JoinUs;
