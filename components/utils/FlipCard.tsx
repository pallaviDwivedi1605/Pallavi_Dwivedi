import React from "react";
import Image from "next/image";

const FlipCard = ({ image, name, desc, skill }: any) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className=" bg-white rounded-t-2xl flex justify-center items-center">
            <Image
              className=" rounded-xl h-[18.5rem] w-auto shadow-lg shadow-blue-200"
              src={image}
              alt="image"
              height={2000}
              width={2000}
            />
          </div>
          <br />
          <div className=" h-1/3 rounded-b-2xl flex items-center flex-col pt-2 gap-2">
            <h3 className="text-xl font-semibold tracking-wide">{name}</h3>
            <p className="text-lg font-medium">{skill}</p>
          </div>
        </div>
        <div className="flip-card-back shadow-md px-4 py-8 text-left">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
