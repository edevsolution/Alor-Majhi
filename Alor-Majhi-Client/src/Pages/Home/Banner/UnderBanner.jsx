import React from "react";
import { FaDonate } from "react-icons/fa";
import { BiSolidDonateBlood } from "react-icons/bi";

const UnderBanner = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Alormaji is the Soicial site for charitable causes & Helping Homeless
        </h1>
        <p className="text-lg font-semibold opacity-75 my-4">
          What we do is best seen in action! Our forms blend seamlessly with
          client sites and are customized to meet their
        </p>
      </div>

      <div className="grid lg:grid-cols-3 ">
        <div className="border border-gray-100 text-center py-8 ">
          <span className=" ">
            {" "}
            <BiSolidDonateBlood className="mx-auto rounded-full border-2 text-8xl p-2 " />
          </span>{" "}
          <div className="pt-4">
            <h1 className="text-2xl font-semibold ">Make Donation</h1>
            <h3 className="text-lg opacity-70 py-1 ">
              Help us by Make Donation
            </h3>
            <p className="opacity-70  font-semi-bold px-4">
              Raise more money with our custom made solution. Unlimited campai
              pages pledge giving, monthly giving.
            </p>
          </div>
        </div>
        <div className="border border-gray-100 text-center py-8 ">
          <span className=" ">
            {" "}
            <BiSolidDonateBlood className="mx-auto rounded-full border-2 text-8xl p-2 " />
          </span>{" "}
          <div className="pt-4">
            <h1 className="text-2xl font-semibold ">Make Donation</h1>
            <h3 className="text-lg opacity-70 py-1 ">
              Help us by Make Donation
            </h3>
            <p className="opacity-70  font-semi-bold px-4">
              Raise more money with our custom made solution. Unlimited campai
              pages pledge giving, monthly giving.
            </p>
          </div>
        </div>
        <div className="border border-gray-100 text-center py-8 ">
          <span className=" ">
            {" "}
            <BiSolidDonateBlood className="mx-auto rounded-full border-2 text-8xl p-2 " />
          </span>{" "}
          <div className="pt-4">
            <h1 className="text-2xl font-semibold ">Make Donation</h1>
            <h3 className="text-lg opacity-70 py-1 ">
              Help us by Make Donation
            </h3>
            <p className="opacity-70  font-semi-bold px-4">
              Raise more money with our custom made solution. Unlimited campai
              pages pledge giving, monthly giving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderBanner;
