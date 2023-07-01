"use client"
import React from 'react';
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
      desc: 'Designed and developed the front-end of the dashboard using React.js, MUI, and Ant Design to create a modern and user-friendly interface. Implemented data visualization through charts using Highcharts, effectively presenting complex data in a visually appealing and informative manner. Collaborated closely with the team of developers and designers to ensure seamless integration of the front-end and back-end components, delivering a high-quality product within project deadlines.',
    },
    {
      id: 2,
      image: '/images/migraters.png',
      alt: 'Migraters',
      projectLink: 'https://pallavidwivedi1605.github.io/MIGRATERS/',
      title: 'Migraters',
      subTitle: 'HTML | CSS | JavaScript',
      desc: 'Collaborated with a team of designers and developers to create a front-end for a tourism website using HTML, CSS, and JavaScript. Implemented engaging user interfaces and optimized the website for a seamless user experience. Employed best practices in web design to ensure high performance, cross-browser compatibility, and accessibility.',
    },
    {
      id: 3,
      image: '/images/simon.png',
      alt: 'Simon',
      projectLink: 'https://pallavidwivedi1605.github.io/Simon/',
      title: 'Simon',
      subTitle: 'HTML | CSS | Jquery',
      desc: 'Created an interactive Game using HTML, CSS, and Jquery, allowing users to play and experiment with buttons and check their memorizing power. Implemented responsive buttons and sound effects, to enhance user engagement. Ensured smooth functionality across different browsers and devices. It will engage you in game because your goal will be to memorize the previous pattern',
    },
    {
      id: 4,
      image: '/images/drumset.png',
      alt: 'Drum Set',
      projectLink: 'https://pallavidwivedi1605.github.io/Drum_Set/',
      title: 'Drum-Set',
      subTitle: 'HTML | CSS | JavaScript',
      desc: 'Created an interactive drum set using HTML, CSS, and JavaScript, allowing users to play and experiment with different drum sounds. Implemented dynamic features, including responsive buttons and sound effects, to enhance user engagement. Ensured smooth functionality across different browsers and devices. It will give you vibe of playing Drum Set, just press the keys and feel the magic.',
    },
    {
      id: 5,
      image: '/images/tindog.png',
      alt: 'Tindog',
      projectLink: 'https://pallavidwivedi1605.github.io/Tindog/',
      title: 'Tindog',
      subTitle: 'HTML | CSS | Bootstrap',
      desc: 'Developed a responsive website using HTML, CSS, and Bootstrap, catering to dog lovers looking for social connections. Implemented a visually appealing and user-friendly layout with responsive design principles, ensuring optimal user experience on various devices and screen sizes. Employed Bootstrap components and CSS styling to create an engaging and modern interface.',
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