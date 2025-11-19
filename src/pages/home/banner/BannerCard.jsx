import React from "react";
import bannerImg2 from "../../../assets/tiny-deliveryman.png";
import { Link } from "react-router";

const BannerCard = ({ items }) => {
  return (
    <div className="flex justify-between items-center p-15 rounded-xl my-5 shadow-sm bg-white dark:bg-gray-800 ">
      <div className="flex flex-col gap-5">
        <div className="text-5xl space-y-5">
          <img src={bannerImg2} className="w-40" alt="" />
          <h2 className="font-bold text-5xl/snug">
            {items.title1} <br />
            <span className="text-[#CAEB66]">{items.title2} </span>
            {items.title3} <br />
            {items.title4}
          </h2>
          <p className="text-sm">{items.description}</p>
        </div>
        <div className="flex gap-5">
          <Link className="btn">Track Your Parcel</Link>
          <Link className="btn">Be A Rider</Link>
        </div>
      </div>
      <div className="flex items-end justify-end">
        <img src={items.image_url} className="w-full" alt="big_delevary_man" />
      </div>
    </div>
  );
};

export default BannerCard;
