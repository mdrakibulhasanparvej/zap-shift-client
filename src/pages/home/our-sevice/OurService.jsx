import React, { useEffect, useState } from "react";

const OurService = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/ourservice.json")
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>loading......</p>;

  return (
    <div className="bg-[#03373D] rounded-xl p-5 my-15">
      <div className="text-white text-center space-y-3 my-5">
        <h2 className="text-3xl font-bold">Our Service</h2>
        <p className="text-md text-gray-200">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-7 gap-4">
        {card.map((item) => (
          <div className="flex flex-col items-center text-center justify-center  bg-white p-5 space-y-5 rounded-xl">
            <img src={item.icon_url} className="w-20 h-20" alt="" />
            <h2 className="text-xl text-[#03373D] font-bold">{item.title}</h2>
            <p className="text-md text-[#03555e] px-5">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
