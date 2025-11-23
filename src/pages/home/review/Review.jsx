import React, { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, [loading]);
  // console.log(reviews);

  if (loading) return <p>loading......</p>;

  return (
    <div className="w-10/12 mx-auto my-14 rounded-xl ">
      <div className="flex flex-col gap-5 text-center w-[70%] mx-auto mb-10">
        {/* <img src="" alt="" /> */}
        <h2 className="text-2xl text-center font-bold ">
          What our customers are sayings
        </h2>
        <p className="text-sm md:text-base">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="mx-auto overflow-hidden">
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 20,
            stretch: 50,
            depth: 100,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          //   className="mySwiper"
        >
          {reviews.map((item) => (
            <SwiperSlide>
              <div className="bg-white shadow-sm rounded-xl w-86 p-10">
                <div className="border-b-2 border-dashed space-y-5 border-gray-500 pb-5 mb-5">
                  <FaQuoteRight size={24} color="gray" />
                  <p>{item.quote}</p>
                </div>
                <div className="flex gap-5 items-center">
                  <div>
                    <img
                      src={item.image_url}
                      className="w-15 h-15"
                      alt="user"
                    />
                  </div>
                  <div>
                    <h2>{item.author}</h2>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
