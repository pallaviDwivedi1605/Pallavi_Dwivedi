"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt4 } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import Button from "./utils/Button";

const NavLinkData = [
  { key: 1, id: "Home", link: "#home" },
  { key: 2, id: "About", link: "#about" },
  { key: 3, id: "Skills", link: "#skills" },
  { key: 4, id: "Projects", link: "#projects" },
  { key: 5, id: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<number>(1);

  const handleMenuClick = () => {
    setOpen(!open);
  }

  return (
  <nav className="backdrop-blur-xl bg-white/10 shadow-md z-20 fixed top-0 w-screen">
    
    <div className=" ps-8 pe-8 pt-4 pb-5 flex justify-between items-center">
      <h1 className="text-xl font-extrabold tracking-wide">P<span className=" text-primary">D</span></h1>
      <div className="hidden md:flex justify-center items-center gap-10">
        {NavLinkData.map((obj) => (
          <Link onClick={() => setActiveLink(obj.key)} href={obj.link}  key={obj.key} className={`transition-all duration-300 hover:tracking-widest hover:text-primary focus:font-semibold focus:text-lg focus:text-primary ${
            obj.key === activeLink ? "font-semibold text-lg text-primary tracking-widest" : ""
          }`}>
            {obj.id}
          </Link>  
        ))}
      </div>
      <div className="hidden md:inline">
        {
          activeLink === 1? "":<Button target={"_blank"} href={"/PALLAVI_DWIVEDI.pdf"} name={"Download CV"} />
        } 
      </div>
      <div className="md:hidden cursor-pointer" onClick={handleMenuClick}>
        <div className={`transition-all duration-300 ${open ? 'transform rotate-90' : ''}`}>
          {
            open ? <RxCross2 color="rgba(255,0,65,1)" fontSize="25px" /> : <HiMenuAlt4 color="rgba(255,0,65,1)" fontSize="25px" />
          }
        </div>
      </div>
    </div>
    
    {/* small menu */}
      {
        open ?  <div className="bg-white bg-opacity-10 flex flex-col  md:hidden">
        {NavLinkData.map((obj) => (
          <Link onClick={handleMenuClick} className=" transition-all duration-300 text-right border border-orange-300 pe-12 focus:font-semibold focus:text-lg focus:text-primary" href={obj.link}  key={obj.key}>
            {obj.id}
          </Link>  
        ))}
      </div> : ""
      }
  
  </nav>
  );
};

export default Navbar;