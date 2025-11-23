import React, { useEffect, useState } from "react";

const Support = () => {
  const [support, setSupport] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/support.json")
      .then((res) => res.json())
      .then((data) => {
        setSupport(data);
        setLoading(false);
      });
  }, []);
  //   console.log(banner);

  if (loading) return <p>loading......</p>;

  return (
    <div className="my-18 w-10/12 mx-auto flex flex-col gap-5">
      {support.map((item, index) => (
        <div
          key={index}
          className="flex gap-5 bg-white shadow-sm rounded-xl p-10 items-center"
        >
          <div className="lg:border-r-2 lg:border-gray-500 lg:border-dashed pr-5">
            <img src={item.image_url} className="w-30" alt="" />
          </div>
          <div>
            <h2 className="text-lg font-bold mb-3">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Support;
