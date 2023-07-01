import Image from 'next/image'
import React from 'react'
import styles from "./card.module.css"
import Link from 'next/link'

function Card(props) {
  return (
    <div className={styles.card}>
        <header className={styles.card__thumb}>
            <Link href={props.projectLink} target='_blank'>
            <div className={'image-container'}>
            <Image src={props.src} alt={props.alt} layout="fill" className={'image'} />
            </div>
                {/* <Image src={props.src} alt={props.alt} width={350} height={245} /> */}
            </Link>
        </header>
        <div className={styles.card__body}>
            <h2 className={styles.card__title}><a href="#">{props.title}</a></h2>
            <div className={styles.card__subtitle}>{props.subTitle}</div>
            {/* <p className={styles.card__description}>
                {props.desc}
            </p> */}
            <Link className={styles.btn} href={props.projectLink} target='_blank'>Visit Project</Link>
        </div>   
    </div>
  )
}

export default Card
