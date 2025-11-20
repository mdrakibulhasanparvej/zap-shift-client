import React, { useEffect, useState } from "react";
import bannerImg2 from "../../../assets/tiny-deliveryman.png";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const Banner = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/banner.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="w-full h-full"
      >
        {data.map((items, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-between items-center p-15 rounded-xl my-5 shadow-sm bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(202,235,102,1)_85%,rgba(175,237,83,1)_100%)] dark:bg-gray-800 ">
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
                <img
                  src={items.image_url}
                  className="w-full"
                  alt="big_delivery_man"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
