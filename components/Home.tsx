import Link from "next/link";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { IoMdCall } from 'react-icons/io'
import { HiOutlineArrowSmRight, HiMail, HiMailOpen } from 'react-icons/hi'
import { PiArrowRightFill } from 'react-icons/pi'
import { Abril_Fatface } from "next/font/google";



const headingFont = Abril_Fatface({subsets: ['latin'],weight: '400'})
const Home = () => {
  return (
  <div className=" bg-dull-orange h-full w-full pt-24 flex-col justify-center items-center ">
    <div className=" h-1/2 p-6 flex justify-start items-end">
      <div className="pt-4 pb-4 ps-3 pe-3 w-max bg-white bg-opacity-10 rounded-lg"><p className="text-tangy-orange font-medium tracking-wide flex items-center gap-2"><HiMail color="red" fontSize="25px"/>dpallavi854@gmail.com</p></div>
    </div>
    <div className="h-1/2 pt-16 ps-8 pe-4 bg-white">
      <h1 className=" font-bold text-3xl text-left pb-3 text-tangy-orange">Pallavi Dwivedi</h1>
      <p className=" font-extrabold text-4xl text-left pb-5"> A Web Developer.</p>
      <p className=" font-medium text-gray-600 text-lg text-left pb-8">I will tell you how i can best help you to make your product successful.</p>
      <div className="flex gap-3 h-nax">
        <Link href="/PALLAVI_DWIVEDI.pdf"
        target="_blank"
        rel="noopener noreferrer"  className="flex items-center text-white bg-tangy-orange rounded-lg gap-3 tracking-wide font-semibold ps-4 text-xl">Resume<div className=" bg-gradient-to-r from-orange-300 to-orange-500 ps-4 pe-4 pt-4 pb-4 rounded-r-lg"><PiArrowRightFill color="#fff" fontSize="25px" /></div></Link>
        <Link href={"#contact"} className="flex items-center bg-white text-tangy-orange rounded-lg ps-4 pe-4 gap-3 tracking-wide font-semibold text-xl"><div className=" bg-tangy-orange p-3 rounded-full border-2 border-orange-300"><IoMdCall color="#fff" fontSize="20px" /></div>Hire Me</Link>
      </div>
     
    </div>
  </div>);
};

export default Home;


// oranges #F94C10 #FC4F00 #F6BA6F #FFA559 #FF6000