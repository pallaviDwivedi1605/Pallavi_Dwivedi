"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt4 } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const NavLinkData = [
  { key: 1, id: "Home", link: "#home" },
  { key: 2, id: "About", link: "#about" },
  { key: 3, id: "Skills", link: "#skills" },
  { key: 4, id: "Projects", link: "#projects" },
  { key: 5, id: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setOpen(!open);
  }

  return (
  <nav className=" bg-transparent fixed top-0 w-screen">
    <div className=" ps-5 pe-7 pt-2 mt-4 pb-2 flex justify-between items-center">
      <h1>PD</h1>
      <div className="hidden md:flex justify-center items-center gap-10">
        {NavLinkData.map((obj) => (
          <Link href={obj.link}  key={obj.key} className=" transition-all duration-300 hover:tracking-widest hover:text-tangy-orange focus:font-semibold focus:text-lg focus:text-tangy-orange">
            {obj.id}
          </Link>  
        ))}
      </div>
      <Link href="/PALLAVI_DWIVEDI.pdf"
        target="_blank"
        rel="noopener noreferrer" 
        className=" hidden p-1 ps-3 pe-3 bg-tangy-orange text-white rounded-lg border-2 border-orange-500 md:inline"
      >
        Download CV
      </Link>
      <div className="md:hidden cursor-pointer" onClick={handleMenuClick}>
        <div className={`transition-all duration-300 ${open ? 'transform rotate-90' : ''}`}>
          {
            open ? <RxCross2 color="#FF6000" fontSize="25px" /> : <HiMenuAlt4 color="#FF6000" fontSize="25px" />
          }
        </div>
      </div>
    </div>
    
    {/* small menu */}
      {
        open ?  <div className="bg-white bg-opacity-10 flex flex-col  md:hidden">
        {NavLinkData.map((obj) => (
          <Link onClick={handleMenuClick} className=" transition-all duration-300 text-right border border-orange-300 pe-12 focus:font-semibold focus:text-lg focus:text-tangy-orange" href={obj.link}  key={obj.key}>
            {obj.id}
          </Link>  
        ))}
      </div> : ""
      }
  
  </nav>
  );
};

export default Navbar;