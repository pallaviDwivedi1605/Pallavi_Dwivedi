"use client"
import React from 'react'
import styles from "./page.module.css"
import Project from "./projects/page";
import Box from '@/components/styledShadowBox/Box';
import HomeSection from '@/components/homeSection/HomeSection';

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={`${styles.home_section} `}>
        <HomeSection />
      </section>
      <hr className={styles.ruler} />
      <Box />
      <hr className={styles.ruler} />
      <Project/>
    </div>
  )
  ;
}
