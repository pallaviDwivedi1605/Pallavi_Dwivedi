import React from 'react'
import styles from "./homeSection.module.css"
import Image from "next/image";
import { Abril_Fatface, Josefin_Sans } from "next/font/google";
import Link from "next/link";
import LaunchIcon from '@mui/icons-material/Launch';
import Pallavi from "public/images/Pallavi.png"
import LetterAnimation from './LetterAnimation';


const headingFont = Abril_Fatface({subsets: ['latin'],weight: '400'})
const pFont = Josefin_Sans({subsets: ['latin'],weight: '400'})

function HomeSection() {

  return (
    <div className={styles.container}>
          <div className={styles.heading}>
            <p className={pFont.className}>Hey! My name is</p>
            <h1 className={headingFont.className}>PALLAVI DWIVEDI.</h1>
            <LetterAnimation />
            <div>
              <Link className={styles.btn}   href="/PALLAVI_DWIVEDI.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer">Resume <LaunchIcon/></Link>
              <Link className={styles.btn} href={"/contact"}>Contact Me</Link>
            </div>
          </div>
          <Image className={styles.image} src={Pallavi} width={200} height={200} alt="Pallavi Dwivedi" />
        </div>
  )
}

export default HomeSection