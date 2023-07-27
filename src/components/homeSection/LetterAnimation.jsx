import React, { useState, useEffect } from 'react';
import styles from './letterAnimation.module.css';
import { Abril_Fatface } from "next/font/google";


const headingFont = Abril_Fatface({subsets: ['latin'],weight: '400'})
const LetterAnimation = () => {
    const strings = ["Web Developer.","UI Designer."];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (!isTypingComplete) {
          if (currentText.length < strings[currentIndex].length) {
            setCurrentText((prevText) => prevText + strings[currentIndex][currentText.length]);
          } else {
            setIsTypingComplete(true);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText((prevText) => prevText.slice(0, -1));
          } else {
            setIsTypingComplete(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
          }
        }
      }, 130); // Adjust the interval time (in milliseconds) for typing speed
  
      return () => {
        clearInterval(intervalId);
      };
    }, [currentIndex, currentText, isTypingComplete]);
  

    // fixed type writter
    return (
        <p className={`${headingFont.className} ${styles.text}`}>
            <span style={{paddingRight:"5px"}}>I&apos;m a</span>
            {currentText}
        </p>
    );
  };

export default LetterAnimation;