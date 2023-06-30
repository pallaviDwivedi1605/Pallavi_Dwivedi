import React from 'react'
import styles from './card.module.css'
import Link from 'next/link'

function Card(props) {
  return (
    <div className={styles.card}>
        <div className={styles.img_box}>
            <img src={props.src} alt={props.alt} />
        </div>
        <div className={styles.content}>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <Link href={"#"} target='_blank' >Visit Me</Link>
        </div>
    </div>
  )
}

export default Card