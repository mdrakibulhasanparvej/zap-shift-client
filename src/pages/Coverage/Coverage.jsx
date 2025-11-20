import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Coverage = () => {
  const [location, setLocation] = useState([]);
  const [loader, setLoader] = useState(true);
  const position = [23.8041, 90.4152];
  const mapRef = useRef(null);

  useEffect(() => {
    fetch("/serviceCenter.json")
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
        setLoader(false);
      });
  }, []);
  console.log(location);
  // if (loader) return <p>Loading....</p>;

  // console.log(serviceCenters);

  const handleSearch = (e) => {
    e.preventDefault();

    const searchText = e.target.location.value.toLowerCase();

    const district = location.find((c) =>
      c.district.toLowerCase().includes(searchText)
    );

    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 12);
    }
  };

  return (
    <div className="bg-white my-10 p-10 rounded-xl shadow-sm space-y-5">
      <h2 className="text-3xl font-bold">We are available in 64 districts</h2>
      <div>
        {/* search  */}
        <form onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow"
              name="location"
              placeholder="Search"
            />
          </label>
        </form>
      </div>
      {/*  */}
      <div className="border w-full h-[650px]">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[650px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {location.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br /> Service Area:{" "}
                {center.covered_area.join(", ")}.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
