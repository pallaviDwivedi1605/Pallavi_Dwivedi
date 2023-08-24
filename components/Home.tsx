import Link from "next/link";
import React from "react";
import { IoMdCall } from 'react-icons/io'
import { HiMail, HiExternalLink } from 'react-icons/hi'
import { IoLogoGithub,IoLogoLinkedin } from 'react-icons/io'
import { PiArrowRightFill } from 'react-icons/pi'
import { Abril_Fatface } from "next/font/google";
import Image from "next/image";
import Iconn from "./utils/Iconn";



const headingFont = Abril_Fatface({subsets: ['latin'],weight: '400'})
const Home = () => {
  return (
  <div className=" h-full w-full pt-24 pb-10 mt-4 ps-6 pe-6 flex md:justify-center  ">
    <div className=" md:w-2/3 flex gap-20 flex-col md:flex-row md:justify-center">
      {/* text div */}
      <div className=" h-full w-auto flex flex-col justify-center items-center md:items-start md:justify-between">
        <div className=" flex min-w-full flex-col gap-4 md:pt-16">
          <p className=" font-medium text-gray-600 text-xs text-left">WELCOME TO MY WORLD</p>
          <h1 className=" font-bold text-3xl text-left">Hi, I'm <span className=" text-primary">Pallavi Dwivedi</span></h1>
          <h2 className=" font-extrabold text-4xl text-left"> MERN Developer.</h2>
          <p className=" font-medium text-gray-600 text-lg text-left">I will tell you how i can best help you to make your product successful.</p>
          <div className="flex justify-center items-center md:hidden"><Image className=" scale-90 hover:scale-95 hover:drop-shadow-none " style={{filter: "drop-shadow(0px 5px 20px #96B6C5)"}} src={"/images/girl1.png"} alt={"girl"} width={200} height={400} /></div>
          {/* link box */}
          <div className="flex justify-center items-center md:justify-start md:mt-8">
            <div className="flex gap-2 bg-white rounded-full w-max p-1">
              <Link href="/PALLAVI_DWIVEDI.pdf"
              target="_blank"
              rel="noopener noreferrer"  className=" flex items-center text-white bg-primary rounded-full gap-2 tracking-wide font-semibold ps-4 pe-4 text-lg hover:bg-white hover:text-primary hover:shadow-lg">Resume<HiExternalLink/></Link>
              <Link href={"#contact"} className="flex items-center bg-white text-primary rounded-full pe-2 gap-3 tracking-wide border font-semibold text-lg md:bg-inherit hover:shadow-lg"><div className=" bg-primary p-2 rounded-full border-2 border-pink-300"><IoMdCall color="#fff" fontSize="20px" /></div>Hire Me</Link>
            </div>
          </div>
        
        </div>
        <div className="hidden md:flex gap-3">
          <Link href={"#"} className="p-3 rounded-full transition-all duration-150 bg-white shadow-lg hover:shadow-none hover:scale-110"><IoLogoLinkedin fontSize="20px" /></Link>
          <Link href={"#"} className="p-3 rounded-full transition-all duration-150 bg-white shadow-lg hover:shadow-none hover:scale-110"><IoLogoGithub fontSize="20px" /></Link>
          <Link href={"#"} className="p-3 rounded-full transition-all duration-150 bg-white shadow-lg hover:shadow-none hover:scale-110"><HiMail fontSize="20px" /></Link>
        </div>
      </div>
      {/* image div */}
      <div className=" w-1/5 relative">
        <Image className="hidden transition-all duration-300 z-0 md:block absolute drop-shadow-2xl hover:scale-90 hover:drop-shadow-none" src={"/images/girl1.png"} alt={""} fill={true} />
      </div>
    </div>
  </div>);
};

export default Home;