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
    <div className=" ps-5 pe-7 pt-2 pb-2 flex justify-between items-center">
      <h1>PD</h1>
      <div className="hidden md:flex justify-center items-center gap-10">
        {NavLinkData.map((obj) => (
          <Link href={obj.link}  key={obj.key}>
            {obj.id}
          </Link>  
        ))}
      </div>
      <Link href="/PALLAVI_DWIVEDI.pdf"
        target="_blank"
        rel="noopener noreferrer" 
        className=" hidden p-1 ps-3 pe-3 bg-white rounded-full border-2 border-tangy-orange md:inline"
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
        open ?  <div className="bg-white backdrop:blur-md md:hidden">
        {NavLinkData.map((obj) => (
          <Link onClick={handleMenuClick} className="block text-right border border-dotted pe-12" href={obj.link}  key={obj.key}>
            {obj.id}
          </Link>  
        ))}
      </div> : ""
      }
  
  </nav>
  );
};

export default Navbar;



{/* <div className="border fixed top-0 z-50 w-full bg-opacity-50 backdrop-filter backdrop-blur-md">
<div className="flex px-6 py-3 justify-between md:justify-around">
  {/* <Image
    src={"/logo.svg"}
    alt="logo"
    height={120}
    width={120}
    className="scale-150 outline hover:outline-offset-4 mix-blend-multiply

"
  /> *}
  <button
    className="block md:hidden"
    onClick={() => {
      setOpen(!open);
    }}
  >
    {open ? <RxCross2 /> : <RxHamburgerMenu />}
  </button>
  <NavLinks />
</div>
{open ? (
  <div className="block md:hidden">
    <ul onClick={() => setOpen(!open)} className="">
      {NavLinkData.map((obj) => (
        <li
          key={obj.key}
          className="pl-10 py-2 border border-dotted active:bg-slate-200            "
        >
          <a href={obj.link} className="">
            {obj.id}
          </a>
        </li>
      ))}
    </ul>
  </div>
) : (
  ""
)}
</div> */}