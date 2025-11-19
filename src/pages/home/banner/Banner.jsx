import React from "react";
import bannerImg from "../../../assets/big-deliveryman.png";
import bannerImg2 from "../../../assets/tiny-deliveryman.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="flex justify-between items-center p-15 rounded-xl my-5 shadow-sm bg-white dark:bg-gray-800 ">
      <div className="flex flex-col gap-5">
        <div className="text-5xl space-y-5">
          <img src={bannerImg2} className="w-40" alt="" />
          <h2 className="font-bold text-5xl/snug">
            We Make Sure Your <br />
            <span className="text-[#CAEB66]">Parcel Arrived </span>On Time{" "}
            <br />
            -No Fuss.
          </h2>
        </div>
        <div className="flex gap-5">
          <Link className="btn">Track Your Parcel</Link>
          <Link className="btn">Be A Rider</Link>
        </div>
      </div>
      <div className="flex items-end justify-end">
        <img src={bannerImg} className="w-[70%]" alt="big_delevary_man" />
      </div>
    </div>
  );
};

export default Banner;
