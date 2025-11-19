import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Brand = () => {
  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => {
        setBanner(data);
        setLoading(false);
      });
  }, []);
  console.log(banner);

  if (loading) return <p>loading......</p>;
  return (
    <div className="w-10/12 mx-auto my-15 border-b-2 border-dashed pb-18">
      <div>
        <h2 className="text-2xl text-center font-bold mb-10">
          We've helped thousands of sales teams
        </h2>
      </div>
      <div>
        <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
          {banner.map((items, index) => (
            <div key={index} className="mx-5 bg-white rounded-xl p-5 shadow-sm">
              <img src={items.image_url} className=" w-full" alt="brand" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Brand;
