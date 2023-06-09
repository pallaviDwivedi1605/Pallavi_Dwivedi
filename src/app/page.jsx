import Image from "next/image";
import styles from "./page.module.css"
import Pallavi from "public/images/Pallavi.png"
import About from "./about/page";
import Project from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div>
      <section id="homepage-section">
        <div className={styles.container}>
          <div className={styles.heading}>
            <p>Hey! My name is</p>
            <h1>PALAVI DWIVEDI.</h1>
            <h3>A Front-end Developer.</h3>
          </div>
          <Image className={styles.image} src={Pallavi} width={200} height={200} alt="Pallavi Dwivedi" />
        </div>
      </section>
      <About/>
      <Project/>
      <Contact/>
    </div>
    
      
   
  )
  ;
}
