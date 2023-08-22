import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from 'react-icons/bs'
import { Abril_Fatface } from "next/font/google";
import LetterAnimation from "./letterAnimation/LetterAnimation";
import Image from "next/image";


const headingFont = Abril_Fatface({subsets: ['latin'],weight: '400'})
const Home = () => {
  return <div className=" bg-white p-10 flex">
    <div>
      <p>Hey! My name is</p>
      <h1 className={headingFont.className}>PALLAVI DWIVEDI.</h1>
      <LetterAnimation />
      <div>
        <Link href="/PALLAVI_DWIVEDI.pdf"
        // alt="alt text"
        target="_blank"
        rel="noopener noreferrer">Resume</Link>
        <Link href={"#"}>Contact Me</Link>
      </div>
    </div>
    <Image src={"/images/character.svg"} width={200} height={200} alt="Pallavi Dwivedi" />
     </div>;
};

export default Home;
