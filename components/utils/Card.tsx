import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const Card = ({ image, label, tech, desc, link }: any) => {
  return (
    <div className=" group w-80 md:w-64 h-96 bg-white border relative rounded-2xl overflow-hidden shadow-lg shadow-gray-300 hover:shadow-2xl hover:shadow-gray-500">
      <div className=" rounded-t-2xl h-2/3 w-full transition-all duration-300 ease-in-out bg- group-hover:opacity-40 relative">
        <Image
          className=" absolute rounded-t-2xl"
          src={image}
          alt="image"
          fill={true}
        />
      </div>
      <div className=" rounded-b-2xl h-1/3 transition-all duration-300 ease-in-out group-hover:h-2/3 absolute bottom-0 w-full bg-white pt-2 pb-2 ps-3 pe-3 flex flex-col items-center gap-2">
        <h3 className="text-xl font-semibold tracking-wide">{label}</h3>
        <p className=" tetx-lg font-medium">{tech}</p>
        <p className=" text-left hidden group-hover:inline overflow-clip">
          {desc}
        </p>
        <Link href={"#"} className="border rounded-lg px-4 border-primary bg-white text-primary p-2 hover:border-white hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-rose-500/50">Visit</Link>
      </div>
    </div>
  );
};

export default Card;
