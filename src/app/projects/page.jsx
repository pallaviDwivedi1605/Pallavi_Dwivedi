"use client"
import React, { useState } from 'react';
import styles from './page.module.css';
import Carousel from '@/components/carousel/Carousel';


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

 

  return (
      <section className={styles.project_section}>
        <Carousel array={projectData} />
      </section>
  );
}

export default Project;
4