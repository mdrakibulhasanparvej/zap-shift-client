import React from "react";
import Banner from "./banner/Banner";
import HowItWorks from "./howItWorks/HowItWorks";
import OurService from "./our-sevice/OurService";
import Brand from "./brand/Brand";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <HowItWorks />
      <OurService />
      <Brand />
    </div>
  );
};

export default Home;
