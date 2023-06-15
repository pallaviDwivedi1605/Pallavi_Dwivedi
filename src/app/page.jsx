"use client"
import React, {useEffect,useState} from 'react'
import Image from "next/image";
import styles from "./page.module.css"
import Pallavi from "public/images/Pallavi.png"
import About from "./about/page";
import Project from "./projects/page";
import Contact from "./contact/page";
import { Abril_Fatface, Josefin_Sans } from "next/font/google";
import Link from "next/link";

const headingFont = Abril_Fatface({subsets: ['latin'],weight: '400'})
const pFont = Josefin_Sans({subsets: ['latin'],weight: '400'})

export default function Home() {

  const roles = ["Front-end Developer.", "UX/UI Designer."];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isWriting, setIsWriting] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWriting(false);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsWriting(true);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.main}>
      <section className={`${styles.home_section} `}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <p className={pFont.className}>Hey! My name is</p>
            <h1 className={headingFont.className}>PALLAVI DWIVEDI.</h1>
            {isWriting ? (
              <h3 className={`${headingFont.className} ${styles.letter_animation}`}>
                <span>{roles[currentRoleIndex]}</span>
              </h3>
            ) : (
              <h3 className={`${headingFont.className} ${styles.letter_erase_animation}`}>
                <span>{roles[currentRoleIndex]}</span>
              </h3>
            )}
            <div>
              {/* download="Resume.pdf" */}
              <Link className={styles.btn}  href={"/resume/PallaviResume.pdf"} target="_blank"> Resume</Link>
              <Link className={styles.btn} href={"/contact"}>Contact Me</Link>
            </div>
          </div>
          <Image className={styles.image} src={Pallavi} width={400} height={600} alt="Pallavi Dwivedi" />
        </div>
      </section>
      <hr className={styles.ruler} />
      <About/>
      <hr className={styles.ruler} />
      <Project/>
      <hr className={styles.ruler} />
      <Contact/>
    </div>
  )
  ;
}
