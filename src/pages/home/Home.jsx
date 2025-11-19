import React from "react";
import Banner from "./banner/Banner";
import HowItWorks from "./howItWorks/HowItWorks";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <HowItWorks />
    </div>
  );
};

export default Home;
