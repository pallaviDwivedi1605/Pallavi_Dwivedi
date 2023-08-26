import Link from "next/link";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { HiExternalLink } from "react-icons/hi";

import Image from "next/image";

const linkData = [
  {
    key: 1,
    img: "/images/linkedin.svg",
    name: "Linkedin",
    link: "https://www.linkedin.com/in/pallavidwivedi/",
  },
  {
    key: 2,
    img: "/images/gmail.svg",
    name: "Gmail",
    link: "mailto:dpallavi854@gmail.com",
  },
  {
    key: 3,
    img: "/images/github.svg",
    name: "Github",
    link: "https://github.com/pallaviDwivedi1605/",
  },
];

const Tabs = () => {
  return (
    <div className="flex justify-center items-center md:justify-start mt-5 md:mt-8 space-x-4">
      <Link
        href="/PALLAVI_DWIVEDI.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="duration-500 flex items-center justify-center text-white bg-primary rounded-full py-2 px-4 tracking-wide font-medium text-lg hover:bg-white hover:text-primary hover:shadow-lg"
      >
        Resume
        <HiExternalLink />
      </Link>
      <Link
        href={"#contact"}
        className="flex items-center bg-white text-primary hover:text-white rounded-full px-4 py-2 tracking-wide font-medium text-lg hover:bg-primary hover:shadow-lg duration-500"
      >
        <IoMdCall className="bg-primary text-[20px] h-8 w-8 rounded-full p-2 mr-1 text-white hover:text-primary hover:bg-white duration-300" />
        Hire Me
      </Link>
    </div>
  );
};

const ContactLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-5 md:mt-8">
      {linkData.map((obj) => (
        <Link
          href={obj.link}
          key={obj.key}
          className="h-20 w-20 flex flex-col items-center justify-center contact-link"
        >
          <div className="image-container">
            <Image
              src={obj.img}
              alt={obj.name}
              className="duration-500"
              width={50}
              height={50}
            />
          </div>
          <h2 className="h2_transformation font-bold text-gray-700">
            {obj.name}
          </h2>
        </Link>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className="mx-10">
      <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
        {/* text div */}
        <div className=" flex w-full md:h-[70vh] flex-col items-start md:justify-center md:p-24 justify-start space-y-2">
          <p className=" font-medium text-gray-600">WELCOME TO MY WORLD</p>
          <h1 className=" font-bold text-3xl text-left">
            Hi, I’m <span className=" text-primary">Pallavi Dwivedi</span>
          </h1>
          <h2 className="font-extrabold text-4xl text-left">MERN Developer.</h2>
          <p className=" font-medium text-gray-600 text-lg md:text-xl text-left md:text-justify">
            Allow me to outline how my expertise can contribute to the success
            of <span className="text-primary">your product.</span>
          </p>

          <div className="hidden md:block">
            <Tabs />
          </div>

          <div className="hidden md:block">
            <ContactLinks />
          </div>
        </div>

        {/* avatar */}
        <div className=" w-full md:h-[70vh] flex justify-center items-center">
          <Image
            style={{ filter: "drop-shadow(0px 5px 20px #96B6C5)" }}
            src={"/images/s6.svg"}
            alt={"girl"}
            width={200}
            height={400}
            className=" w-auto h-96 md:h-auto md:w-96 duration-300 scale-105 md:scale-150 hover:scale-100 md:hover:scale-125 hover:drop-shadow-none rounded-md "
          />
        </div>
        {/* links */}
        <div className=" md:hidden">
          <Tabs />
        </div>
        <div className=" md:hidden">
          <ContactLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;
