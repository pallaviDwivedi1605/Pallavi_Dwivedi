import React from 'react'
import styles from "./page.module.css"
import { Titan_One} from "next/font/google";

const heading = Titan_One({ subsets: ["latin"], weight: "400" });


function About() {
  return (
    <section id="about-section">
      <div className={styles.container}>
        <h2 className={heading.className}>About Me</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta animi quos facere et quae, nesciunt consequatur maxime officia minima magnam rem dolorum perspiciatis consectetur eius possimus magni a tempore voluptatum debitis, fugiat dolor fugit. Sunt, sed. Deleniti qui laudantium pariatur, fugit nam non quia numquam cupiditate ipsam recusandae aperiam dolorum. Recusandae incidunt in sunt nemo placeat eveniet velit, iure magnam. Consequuntur ipsa autem commodi molestiae, atque magnam quas inventore nostrum.
        </p>
      </div>
    </section>
  )
}

export default About