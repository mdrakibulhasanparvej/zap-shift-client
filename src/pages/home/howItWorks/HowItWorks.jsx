import React, { useEffect, useState } from "react";

const HowItWorks = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/how-it-works.json")
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
        setLoading(false);
      });
  }, []);
  //   console.log(card);
  if (loading) return <p>loading.....</p>;

  return (
    <div className="w-10/12 mx-auto my-15">
      <div>
        <h2 className="text-2xl font-bold">How it Works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {card.map((items) => (
          <div className="rounded-xl my-5 p-5 shadow-sm bg-white dark:bg-gray-800 ">
            <img src={items.icons_url} className="w-10" alt="" />
            <h2 className="font-bold py-2">{items.title}</h2>
            <p className="text-sm">{items.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
