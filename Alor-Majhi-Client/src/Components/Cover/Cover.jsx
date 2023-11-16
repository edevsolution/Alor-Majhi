import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the Menu"
      strength={-200}
    >
      <div className="hero lg:h-[700px] h-[200px]">
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md ">
            <h1 className="mb-5 lg:text-7xl text-3xl font-bold uppercase text-white">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
