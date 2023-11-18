import React from "react";
import Cover from "../../../Components/Cover/Cover";
import AboutImg from "../../../assets/image/about.jpg";
import Aboutimg1 from "../../../assets/image/1.jpg";
import founder from "../../../assets/image/founder.jpg";
import thrd from "../../../assets/image/44.jpg";
import { FaOptinMonster, FaSign } from "react-icons/fa";
const AboutUs = () => {
  return (
    <div>
      <Cover
        img={AboutImg}
        title="About Us
      "
      ></Cover>

      <div className="max-w-screen-xl mx-4 lg:mx-auto my-12 lg:my-28 font-semi-bold">
        <p className="lg:text-5xl text-xl  text-center ">
          AlorMaji is the world’s #1 fundraising site forcharitable causes.
          Raise money for over 1.5 million charities, marathons, events and
          employee giving.
        </p>

        <div>
          <div className="hero lg:my-32">
            <div className="hero-content grid lg:grid-cols-2 lg:gap-12 ">
              <img
                src={Aboutimg1}
                className="lg:max-w-xl border-2 border-black rounded-lg shadow-2xl"
              />
              <div className="">
                <h1 className="text-3xl lg:text-5xl font-bold ">WHO WE ARE</h1>
                <p className="py-6 opacity-80 text-md ">
                  Lorem ipsum dolor sit amet, vis probo mediocritatem ne. Qui
                  muciusreferrentur eu, ea sea quem dicit theophrastus. Sale
                  justo detraxit eu usu. No nec perpetua sententiae. Laoreet
                  antiopam principes ne eam.
                </p>
                <p className="flex gap-3">
                  {" "}
                  <FaSign className="my-auto " />{" "}
                  <span className="opacity-80 text-md">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Et, fugit?
                  </span>{" "}
                </p>
                <p className="flex gap-3 my-2">
                  {" "}
                  <FaSign className="my-auto " />{" "}
                  <span className="opacity-80 text-md">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Et, fugit?
                  </span>{" "}
                </p>
                <p className="flex gap-3">
                  {" "}
                  <FaSign className="my-auto " />{" "}
                  <span className="opacity-80 text-md">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Et, fugit?
                  </span>{" "}
                </p>

                <div>
                  <div className="flex gap-4 pt-8">
                    <div class="avatar ">
                      <div class="w-24 rounded-full border-gray-300 border-2">
                        <img src={founder} />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold pt-4">
                        {" "}
                        Mohammed Imtiaz
                      </h1>
                      <p>CEO & Founder of AlorMaji</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>

        <div className="lg:grid-cols-3 grid gap-4">
          <div className="border ps-8 py-8 pe-8">
            <h1 className="text-7xl font-bold opacity-10 absolute ps-1 font-sans">
              01
            </h1>
            <div className="relative pt-11">
              <h1 className="text-3xl font-semibold">Our History</h1>
              <p className="opacity-75 pt-2 pb-3  text-lg ">
                Work Since 1987 with Pride!!
              </p>
              <p className="opacity-75  ">
                Raise more money with our custom made solution. Unlimited campai
                pages pledge giving, monthly giving.
              </p>
            </div>
          </div>
          <div className="border ps-8 py-8 pe-8">
            <h1 className="text-7xl font-bold opacity-10 absolute ps-1 font-sans">
              02
            </h1>
            <div className="relative pt-11">
              <h1 className="text-3xl font-semibold">Our Mission</h1>
              <p className="opacity-75 pt-2 pb-3  text-lg ">
                Mission to make smile the world
              </p>
              <p className="opacity-75  ">
                Raise more money with our custom made solution. Unlimited campai
                pages pledge giving, monthly giving.
              </p>
            </div>
          </div>
          <div className="border ps-8 py-8 pe-8">
            <h1 className="text-7xl font-bold opacity-10 absolute ps-1 font-sans">
              03
            </h1>
            <div className="relative pt-11">
              <h1 className="text-3xl font-semibold">Our Vision</h1>
              <p className="opacity-75 pt-2 pb-3  text-lg ">
                Work Since 1987 with Pride!!
              </p>
              <p className="opacity-75  ">
                Raise more money with our custom made solution. Unlimited campai
                pages pledge giving, monthly giving.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="relative">
        <div className="bg-black">
          <img src={thrd} className="  opacity-30  " alt="" />
        </div>
        <div className="flex">
          <div className=" absolute top-[200px] text-center">
            <h2 className="text-white text-4xl font-bold">100</h2>
            <h2 className="text-white text-4xl font-bold">Project Done</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
