import React from "react";
import Banner from "./banner/Banner";
import HowItWorks from "./howItWorks/HowItWorks";
import OurService from "./our-sevice/OurService";
import Brand from "./brand/Brand";
import Support from "./support/Support";
import SatisfactionBanner from "./satisfaction/SatisfactionBanner";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <HowItWorks />
      <OurService />
      <Brand />
      <Support />
      <SatisfactionBanner />
    </div>
  );
};

export default Home;
