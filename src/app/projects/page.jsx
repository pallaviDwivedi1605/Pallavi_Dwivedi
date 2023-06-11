"use client"
import React, { useState } from 'react';
import styles from './page.module.css';
import Card from '@/components/card/Card';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {Yeseva_One} from "next/font/google";

const heading = Yeseva_One({ subsets: ["latin"], weight: "400" });

function Project() {
  const projectData = [
    {
      id: 1,
      image: '/images/dashboard.png',
      alt: 'Dashboard',
      projectLink: '/projects',
      title: 'Dashboard',
      subTitle: 'React.js | MUI | Highcharts',
      desc:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo praesentium natus adipisci nemo consectetur soluta corporis delectus odit sint saepe.',
    },
    {
      id: 2,
      image: '/images/migraters.png',
      alt: 'Migraters',
      projectLink: 'https://pallavidwivedi1605.github.io/MIGRATERS/',
      title: 'Migraters',
      subTitle: 'HTML | CSS | JavaScript',
      desc:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo praesentium natus adipisci nemo consectetur soluta corporis delectus odit sint saepe.',
    },
    {
      id: 3,
      image: '/images/simon.png',
      alt: 'Simon',
      projectLink: 'https://pallavidwivedi1605.github.io/Simon/',
      title: 'Simon',
      subTitle: 'HTML | CSS | Jquery',
      desc:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo praesentium natus adipisci nemo consectetur soluta corporis delectus odit sint saepe.',
    },
    {
      id: 4,
      image: '/images/drumset.png',
      alt: 'Drum Set',
      projectLink: 'https://pallavidwivedi1605.github.io/Drum_Set/',
      title: 'Drum-Set',
      subTitle: 'HTML | CSS | JavaScript',
      desc:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo praesentium natus adipisci nemo consectetur soluta corporis delectus odit sint saepe.',
    },
    {
      id: 5,
      image: '/images/tindog.png',
      alt: 'Tindog',
      projectLink: 'https://pallavidwivedi1605.github.io/Tindog/',
      title: 'Tindog',
      subTitle: 'HTML | CSS | Bootstrap',
      desc:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo praesentium natus adipisci nemo consectetur soluta corporis delectus odit sint saepe.',
    },
  ];

  const [imageIndex, setImageIndex] = useState(0);

  const moveForward = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const moveBackward = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length);
  };

  return (
    <section id="project-section">
      <div className={styles.container}>
        <h2 className={`${styles.heading} ${heading.className}`}>My Work</h2>
        <div className={styles.carousel}>
          <Link className={styles.arrow} href={'/projects'} onClick={moveBackward}>
          <IconButton><KeyboardDoubleArrowLeftIcon/></IconButton>
          </Link>

          <div className={styles.card_list}>
            <Card
              key={projectData[imageIndex].id}
              src={projectData[imageIndex].image}
              alt={projectData[imageIndex].alt}
              title={projectData[imageIndex].title}
              subTitle={projectData[imageIndex].subTitle}
              desc={projectData[imageIndex].desc}
              projectLink={projectData[imageIndex].projectLink}
            />
          </div>

          <Link className={styles.arrow} href={'/projects'} onClick={moveForward}>
            <IconButton><KeyboardDoubleArrowRightIcon/></IconButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Project;
4