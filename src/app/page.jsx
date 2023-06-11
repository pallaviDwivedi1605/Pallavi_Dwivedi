import Image from "next/image";
import styles from "./page.module.css"
import Pallavi from "public/images/Pallavi.png"
import About from "./about/page";
import Project from "./projects/page";
import Contact from "./contact/page";
import { Abril_Fatface, Josefin_Sans } from "next/font/google";

const headingFont = Abril_Fatface({subsets: ['latin'],weight: '400'})
const pFont = Josefin_Sans({subsets: ['latin'],weight: '400'})

export default function Home() {
  return (
    <div className={styles.main}>
      <section id="homepage-section">
        <div className={styles.container}>
          <div className={styles.heading}>
            <p className={pFont.className}>Hey! My name is</p>
            <h1 className={headingFont.className}>PALLAVI DWIVEDI.</h1>
            <h3 className={headingFont.className}>A Front-end Developer.</h3>
          </div>
          <Image className={styles.image} src={Pallavi} width={200} height={200} alt="Pallavi Dwivedi" />
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
