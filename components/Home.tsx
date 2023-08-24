import Link from "next/link";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { HiMail, HiExternalLink } from "react-icons/hi";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { PiArrowRightFill } from "react-icons/pi";
import { Abril_Fatface } from "next/font/google";
import Image from "next/image";

const headingFont = Abril_Fatface({ subsets: ["latin"], weight: "400" });

const Tabs = () => {
  return (
    <div className="flex justify-center items-center md:justify-start md:mt-8 space-x-4">
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

const Home = () => {
  return (
    <div className=" md:mx-10 mx-6 ">
      <div className=" flex flex-col md:flex-row space-y-10 md:space-x-10 justify-center items-center md:p-14 ">
        {/* text div */}
        <div className=" flex flex-col gap-4 md:w-full md:px-24">
          <p className=" font-medium text-gray-600 text-md text-left ">
            WELCOME TO MY WORLD
          </p>
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
        </div>

        {/* avatar */}
        <div className=" md:w-full flex justify-center items-center">
          <Image
            style={{ filter: "drop-shadow(0px 5px 20px #96B6C5)" }}
            src={"/images/s6.svg"}
            alt={"girl"}
            width={200}
            height={400}
            className=" w-auto h-96 md:h-auto md:w-52 duration-300 scale-105 md:scale-150 hover:scale-100 md:hover:scale-125 hover:drop-shadow-none "
          />
        </div>
        {/* links */}
        <div className=" md:hidden">
          <Tabs />
        </div>
      </div>

      <div className="hidden md:flex gap-3">
        <Link
          href={"#"}
          className="p-3 rounded-full transition-all duration-150 bg-white shadow-lg hover:shadow-none hover:scale-110"
        >
          <IoLogoLinkedin fontSize="20px" />
        </Link>
        <Link
          href={"#"}
          className="p-3 rounded-full transition-all duration-150 bg-white shadow-lg hover:shadow-none hover:scale-110"
        >
          <IoLogoGithub fontSize="20px" />
        </Link>
        <Link
          href={"#"}
          className="p-3 rounded-full transition-all duration-150 bg-white shadow-lg hover:shadow-none hover:scale-110"
        >
          <HiMail fontSize="20px" />
        </Link>
      </div>

      {/* <div className="absolute top-10 right-14"><Iconn img={<Image className=" z-20" src={"/images/java-icon.svg"} alt="java" width={50} height={50} />} /></div>
        <div className="absolute bottom-20"><Iconn img={<Image src={"/images/mysql-icon.svg"} alt="mysql" width={50} height={50} />} /></div>
        <div className="absolute bottom-16 right-4"><Iconn img={<Image src={"/images/react-icon.svg.png"} alt="react" width={50} height={50} />} /></div>
        <div className="absolute top-0 left-10"><Iconn img={<Image src={"/images/nextjs-icon.svg"} alt="nextjs" width={50} height={50} />} /></div> */}
    </div>
  );
};

export default Home;
