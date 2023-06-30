import React,{useState} from 'react'
import styles from './carousel.module.css'
import Card from '@/components/newCard/Card';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {Yeseva_One} from "next/font/google";

const heading = Yeseva_One({ subsets: ["latin"], weight: "400" });

function Carousel(props) {

    const [arrayIndex, setArrayIndex] = useState(0);

    const moveForward = () => {
      setArrayIndex((prevIndex) => (prevIndex + 1) % props.array.length);
    };
  
    const moveBackward = () => {
      setArrayIndex((prevIndex) => (prevIndex - 1 + props.array.length) % props.array.length);
    };

  return (
    <div className={styles.container}>
          <h2 className={`${styles.heading} ${heading.className}`}>My Work</h2>
          <div className={styles.carousel}>
            <Link className={styles.arrow} href={'/projects'} onClick={moveBackward}>
            <IconButton><KeyboardDoubleArrowLeftIcon/></IconButton>
            </Link>

            <div className={styles.card_list}>
              <Card
                className={styles.card}
                key={props.array[arrayIndex].id}
                src={props.array[arrayIndex].image}
                alt={props.array[arrayIndex].alt}
                title={props.array[arrayIndex].title}
                subTitle={props.array[arrayIndex].subTitle}
                desc={props.array[arrayIndex].desc}
                projectLink={props.array[arrayIndex].projectLink}
              />
            </div>

            <Link className={styles.arrow} href={'/projects'} onClick={moveForward}>
              <IconButton><KeyboardDoubleArrowRightIcon/></IconButton>
            </Link>
          </div>
        </div>
  )
}

export default Carousel



