import React, {useEffect,useState} from 'react'
import styles from "./homeSection.module.css"
import Image from "next/image";
import { Abril_Fatface, Josefin_Sans } from "next/font/google";
import Link from "next/link";
import LaunchIcon from '@mui/icons-material/Launch';
import Pallavi from "public/images/Pallavi.png"

const headingFont = Abril_Fatface({subsets: ['latin'],weight: '400'})
const pFont = Josefin_Sans({subsets: ['latin'],weight: '400'})

function HomeSection() {

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
            <a
              className={styles.btn}
              href="/PALLAVI_DWIVEDI.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
            >Download FIle</a>
              {/* <Link className={styles.btn}  href="/PALLAVI_DWIVEDI.PDF" download="Resume.pdf" target="_blank">Resume <LaunchIcon/></Link> */}
              <Link className={styles.btn} href={"/contact"}>Contact Me</Link>
            </div>
          </div>
          <Image className={styles.image} src={Pallavi} width={200} height={200} alt="Pallavi Dwivedi" />
        </div>
  )
}

export default HomeSection