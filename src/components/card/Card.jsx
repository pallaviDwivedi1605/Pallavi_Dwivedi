import Image from 'next/image'
import React from 'react'
import styles from "./card.module.css"
import Link from 'next/link'

function Card(props) {
  return (
    <div className={styles.card}>
        <header className={styles.card_image}>
            <Image src={props.src} alt={props.alt} layout='fill' className={'image'} />
            <div className={styles.box}></div>
        </header>
        <div className={styles.card_body}>
            <h2 className={styles.card_title}><a href="#">{props.title}</a></h2>
            <div className={styles.card_subtitle}>{props.subTitle}</div>
            {/* <p className={styles.card__description}>
                {props.desc}
            </p> */}
            <Link className={styles.btn} href={props.projectLink} target='_blank'>Visit Project</Link>
        </div>   
    </div>
  )
}

export default Card
