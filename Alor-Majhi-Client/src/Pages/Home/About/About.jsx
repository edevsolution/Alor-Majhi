import React from "react";
import AboutImage from "../../../assets/image/AboutImg.jpg";
import { FaBeer, FaPhone, FaTeamspeak, FaUserAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="mx-8">
      <div className="max-w-screen-xl mx-auto my-36">
        <div className="lg:flex ">
          <div className="lg:w-[50%] ">
            <img
              src={AboutImage}
              className="rounded-lg shadow-2xl lg:w-[460px] lg:h-[600px] mx-auto text-center "
            />
          </div>

          <div className="lg:w-[50%] py-8 ">
            <h4 className="lg:text-2xl">About Us</h4>{" "}
            <h1 className="lg:text-5xl text-xl font-bold text-green-900">
              Step Forward Serve The Huminity Reach Out & <br /> Help
            </h1>
            <p className="lg:mt-12 my-4 lg:text-lg text-sm">
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the lives of the
              poor, the abused and the helpless. Spread sunshine in their lives
              no matter what the weather may be.
            </p>
            <div className="lg:flex lg:gap-4 my-8">
              <FaUserAlt className="lg:text-6xl text-4xl" />
              <div className="">
                <h1 className="lg:text-2xl font-bold mt-2">
                  Work As An Intern
                </h1>
                <h1 className="lg:text-lg text-sm mt-1">
                  Sed quia consequuntur agni dolores eos qui ratoluptatem <br />
                  sequi nesciun porquis
                </h1>
              </div>
            </div>
            <div className="flex lg:gap-8">
              <button className="btn btn-sm lg:btn btn-primary">Primary</button>

              <div className="flex gap-3 my-auto">
                <FaPhone className="my-auto  lg:text-6xl text-2xl" />
                <div className="">
                  <h1 className="lg:text-lg  text-sm font-bold">Contact Us</h1>
                  <h1 className="lg:text-lg font-bold text-sm ">1234567899</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
