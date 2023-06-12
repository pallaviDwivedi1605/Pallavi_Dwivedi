import React from 'react'
import styles from "./page.module.css"
import { Titan_One} from "next/font/google";

const heading = Titan_One({ subsets: ["latin"], weight: "400" });


function About() {
  return (
    <section className={styles.about_section}>
      <div className={styles.container}>
        <h2 className={heading.className}>About Me</h2>
        <p>
        Computer Science and Engineering graduate with expertise in web development and programming.
        <br/>Skilled in HTML, CSS, JavaScript, React.js, and Next.js. 
        <br/>Familiar with MUI, Bootstrap, and Highcharts.
        <br/>Cleared GATE Exam in 2023.
        <br/>Experienced in designing front-end applications. 
        <br/>Completed internship in web development. 
        <br/>Passionate about creating user-friendly websites and contributing to innovative projects. 
        <br/>Open to exciting opportunities and collaborations. 
        <br/>Let's connect!
        </p>
      </div>
    </section>
  )
}

export default About