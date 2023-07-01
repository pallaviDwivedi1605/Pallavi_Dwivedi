"use client"
import React,{useState, useEffect} from 'react'
import styles from './carousel.module.css'
import Card from '@/components/card/Card';
import {Yeseva_One} from "next/font/google";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const heading = Yeseva_One({ subsets: ["latin"], weight: "400" });

function MyCarousel(props) {

  const PreviousArrow = ({ onClick }) => (
    <button className="slick-arrow slick-prev" onClick={onClick}>
      Previous
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button className="slick-arrow slick-next" onClick={onClick}>
      Next
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
  };

 

  return (
    <div className={styles.container}>
          <h2 className={`${styles.heading} ${heading.className}`}>My Work</h2>
          <div className={styles.carousel_box}>
            <Slider {...settings}>
              {
                props.array.map((card) => (
                  <Card
                    key={card.id}
                    src={card.image}
                    alt={card.alt}
                    title={card.title}
                    subTitle={card.subTitle}
                    desc={card.desc}
                    projectLink={card.projectLink}
                  />
                ))
              } 
            </Slider>
          </div>
        </div>
  )
}

export default MyCarousel
