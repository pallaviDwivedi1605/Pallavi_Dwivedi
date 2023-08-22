"use client";
import React, { useState } from "react";

import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

const NavLinkData = [
  { key: 1, id: "Home", link: "#home" },
  { key: 2, id: "About", link: "#about" },
  { key: 3, id: "Skills", link: "#skills" },
  { key: 4, id: "Projects", link: "#projects" },
  { key: 5, id: "Contact", link: "#contact" },
];

// const NavLinks = () => {
//   return (
//     <ul className="hidden md:flex gap-16">
//       {NavLinkData.map((obj) => (
//         <li
//           key={obj.key}
//           className="transition-opacity hover:opacity-100 opacity-80 uppercase text-[14px] flex items-center"
//         >
//           <Link href={obj.link}>{obj.id}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
  <nav className=" bg-red-600 md: m-6 flex justify-evenly items-center fixed w-screen">
    <h1>PD</h1>
    <div className="md:flex justify-center items-center gap-10">
      {NavLinkData.map((obj) => (
        <Link href={obj.link}  key={obj.key}>
          {obj.id}
        </Link>  
      ))}
    </div>
    <Link href={"#"} className=" p-1 ps-3 pe-3 bg-white rounded-full border-2 border-orange-500">Download CV</Link>
   
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