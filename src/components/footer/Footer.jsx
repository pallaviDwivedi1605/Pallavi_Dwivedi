'use client'
import React from 'react'
import styles from "./footer.module.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';


function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.copyright}>Ⓒ2023 Pallavi Dwivedi.</div>
        <div className={styles.icons}>
          <Link href={"/"}><LinkedInIcon/> </Link>
          <Link href={"/"}><GitHubIcon/> </Link>
          <Link href={"/"}><InstagramIcon/> </Link>
        </div>
    </div>
  )
}

export default Footer