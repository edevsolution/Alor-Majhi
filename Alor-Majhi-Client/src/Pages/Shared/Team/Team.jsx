import React from "react";
import Cover from "../../../Components/Cover/Cover";
import teampic from "../../../assets/image/555.jpg";
import teammember from "../../../assets/image/founder.jpg";
import { FaFacebook, FaPhone } from "react-icons/fa";

const Team = () => {
  return (
    <div>
      <Cover
        img={teampic}
        title="Our Volunteer
      "
      ></Cover>
      <div className="max-w-screen-xl lg:mx-auto my-12">
        <div className="grid grid-cols-4 gap-16">
          <div className="card border border-gray-200 w-80 bg-base-100 shadow-lg">
            <figure>
              <img src={teammember} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-center text-2xl font-bold">
                Mohammed Imtiaz
              </h2>
              <p className=" text-red-500 font-bold">
                founder & ceo ,Alor Maji
              </p>
              <div className="flex mx-auto gap-4 my-2">
                <p className="text-3xl">
                  <FaFacebook />
                </p>
                <p className="text-3xl">
                  <FaPhone />
                </p>
              </div>
            </div>
          </div>
          <div className="card border border-gray-200 w-80 bg-base-100 shadow-lg">
            <figure>
              <img src={teammember} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-center text-2xl font-bold">
                Mohammed Imtiaz
              </h2>
              <p className=" text-red-500 font-bold">
                founder & ceo ,Alor Maji
              </p>
              <div className="flex mx-auto gap-4 my-2">
                <p className="text-3xl">
                  <FaFacebook />
                </p>
                <p className="text-3xl">
                  <FaPhone />
                </p>
              </div>
            </div>
          </div>
          <div className="card border border-gray-200 w-80 bg-base-100 shadow-lg">
            <figure>
              <img src={teammember} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-center text-2xl font-bold">
                Mohammed Imtiaz
              </h2>
              <p className=" text-red-500 font-bold">
                founder & ceo ,Alor Maji
              </p>
              <div className="flex mx-auto gap-4 my-2">
                <p className="text-3xl">
                  <FaFacebook />
                </p>
                <p className="text-3xl">
                  <FaPhone />
                </p>
              </div>
            </div>
          </div>
          <div className="card border border-gray-200 w-80 bg-base-100 shadow-lg">
            <figure>
              <img src={teammember} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-center text-2xl font-bold">
                Mohammed Imtiaz
              </h2>
              <p className=" text-red-500 font-bold">
                founder & ceo ,Alor Maji
              </p>
              <div className="flex mx-auto gap-4 my-2">
                <p className="text-3xl">
                  <FaFacebook />
                </p>
                <p className="text-3xl">
                  <FaPhone />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
