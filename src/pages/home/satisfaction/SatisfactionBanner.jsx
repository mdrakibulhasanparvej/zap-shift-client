import React from "react";
import { Link } from "react-router";
import img from "../../../assets/location-merchant.png";
import imgbg from "../../../assets/be-a-merchant-bg.png";

const SatisfactionBanner = () => {
  return (
    <div
      className="w-10/12 mx-auto my-14 p-10 rounded-xl shadow-sm text-white"
      style={{
        backgroundColor: "#03373D",
        backgroundImage: `url(${imgbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Merchant and Customer Satisfaction <br /> is Our First Priority
            </h2>

            <p className="text-sm md:text-base max-w-md text-gray-200">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Our courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link className="bg-[#C6FF4F] text-[#03373D] font-semibold px-6 py-3 rounded-full shadow hover:opacity-90 transition">
              Become a Merchant
            </Link>

            <Link className="border border-[#C6FF4F] text-[#C6FF4F] font-semibold px-6 py-3 rounded-full hover:bg-[#C6FF4F] hover:text-[#03373D] transition">
              Earn with ZapShift Courier
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img src={img} alt="Merchant Illustration" className="w-64 md:w-80" />
        </div>
      </div>
    </div>
  );
};

export default SatisfactionBanner;
