import React from "react";

export default function Card({ data }) {
  return (
    <div className="max-w-xs inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
      <div className=" max-w-xs h-auto rounded-3xl shadow-xl mt-5 mb-2 mx-auto whitespace-pre-wrap">
        <img
          className=" w-full h-56 rounded-3xl"
          src={data.img}
          alt="Trekking View"
        />
        <div className="px-6 py-1">
          <div className="font-bold text-lg mb-2">{data.title}</div>
        </div>
        <div className="px-6 pt-1 pb-2 font-semibold">
          <p>{data.date}</p>
          <p>{data.location}</p>
          <p>{data.fees}</p>
          <button className=" mt-5 ml-20 bg-yellow-400 px-5 py-0.5 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
