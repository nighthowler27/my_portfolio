"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './parallax.module.css';

const ParallaxBG = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInFrame, setIsMouseInFrame] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setIsMouseInFrame(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInFrame(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const calculateMove = (depth) => {
    const moveX = (mousePosition.x * depth) / 100;
    const moveY = (mousePosition.y * depth) / 100;
    return { moveX, moveY };
  };

  useEffect(() => {
    console.log('Mouse Position:', mousePosition);
  }, [mousePosition]);

  useEffect(() => {
    console.log('Shapes:', document.querySelectorAll(`.${styles.parallaxShape} > div`));
  }, []);

  const resetShapePositions = () => {
    setIsTransitioning(false);
  };

  useEffect(() => {
    if (!isMouseInFrame) {
      setIsTransitioning(true);
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 100); // Adjust the delay time (in milliseconds) before shapes return to original positions

      return () => clearTimeout(timeout);
    }
  }, [isMouseInFrame]);

  return (
    <div className={styles.container}>
      <div className={styles.parallaxShape} id="parallax">

        <div
          className={styles.shapeOne}
          style={{
            transform: `translate(${calculateMove(3.50).moveX}px, ${calculateMove(5.50).moveY}px)`,
            transition: isMouseInFrame ? 'none' : 'transform 100ms ease-out',
          }}
          onAnimationEnd={resetShapePositions}
        >
          <Image src="/img/shape-1.png" width={200} height={200} alt="shape-one" />
        </div>

        <div
          className={styles.shapeTwo}
          style={{
            transform: `translate(${calculateMove(0.50).moveX}px, ${calculateMove(0.50).moveY}px)`,
            transition: isMouseInFrame ? 'none' : 'transform 100ms ease-out',
          }}
          onAnimationEnd={resetShapePositions}
        >
          <Image src="/img/shape-2.png" width={300} height={300} alt="shape-Two" />
        </div>

        <div
          className={styles.shapeThree}
          style={{
            transform: `translate(${calculateMove(1.50).moveX}px, ${calculateMove(2.50).moveY}px)`,
            transition: isMouseInFrame ? 'none' : 'transform 100ms ease-out',
          }}
          onAnimationEnd={resetShapePositions}
        >
          <Image src="/img/shape-3-1.png" width={400} height={400} alt="shape-three" />
        </div>

        <div
          className={styles.shapeFour}
          style={{
            transform: `translate(${calculateMove(10.50).moveX}px, ${calculateMove(15.50).moveY}px)`,
            transition: isMouseInFrame ? 'none' : 'transform 100ms ease-out',
          }}
          onAnimationEnd={resetShapePositions}
        >
          <Image src="/img/shape-4-2.png" width={100} height={100} alt="shape-four" />
        </div>

        <div
          className={styles.shapeFive}
          style={{
            transform: `translate(${calculateMove(3.50).moveX}px, ${calculateMove(5.50).moveY}px)`,
            transition: isMouseInFrame ? 'none' : 'transform 100ms ease-out',
          }}
          onAnimationEnd={resetShapePositions}
        >
            <Image src="/img/shape-5.png" width={100} height={100} alt="shape-five" />
        </div>

        <div className={styles.shapeSix} style={{
            transform: `translate(${calculateMove(10.00).moveX}px, ${calculateMove(5.0).moveY}px)`,
            transition: isMouseInFrame ? 'none' : 'transform 100ms ease-out',
          }}
          onAnimationEnd={resetShapePositions}
        >
            <Image src="/img/shape-6.png" width={100} height={100} alt="shape-six" />
        </div> 

        <div className={styles.shapeSeven} style={{
            transform: `translate(${calculateMove(0.80).moveX}px, ${calculateMove(0.80).moveY}px)`,
            transition: isMouseInFrame ? 'none' : 'transform 100ms ease-out',
          }}
          onAnimationEnd={resetShapePositions}
        >
            <Image src="/img/shape-7.png" width={100} height={100} alt="shape-seven" />
        </div>

        <div className={styles.shapeEight} style={{
            transform: `translate(${calculateMove(13.50).moveX}px, ${calculateMove(15.50).moveY}px)`,
            transition: isMouseInFrame ? 'none' : 'transform 100ms ease-out',
          }}
          onAnimationEnd={resetShapePositions}
        >
            <Image src="/img/shape-8-2.png" width={100} height={100} alt="shape-eight" />
        </div>

        <div className={styles.shapeNine} style={{
            transform: `translate(${calculateMove(3.50).moveX}px, ${calculateMove(5.50).moveY}px)`,
            transition: isMouseInFrame ? 'none' : 'transform 100ms ease-out',
          }}
          onAnimationEnd={resetShapePositions}
        >
            <Image src="/img/shape-9.png" width={100} height={100} alt="shape-nine" />
        </div>

        <div className={styles.shapeTen} style={{
            transform: `translate(${calculateMove(3.50).moveX}px, ${calculateMove(5.50).moveY}px)`,
            transition: isMouseInFrame ? 'none' : 'transform 100ms ease-out',
          }}
          onAnimationEnd={resetShapePositions}
        >
            <Image src="/img/shape-10-2.png" width={100} height={100} alt="shape-ten" />
        </div>

        <div className={styles.shapeEleven} style={{
            transform: `translate(${calculateMove(3.50).moveX}px, ${calculateMove(5.50).moveY}px)`,
            transition: isMouseInFrame ? 'none' : 'transform 100ms ease-out',
          }}
          onAnimationEnd={resetShapePositions}
        >
            <Image src="/img/shape-11-2.png" width={100} height={100} alt="shape-eleven" />
        </div>

        <div className={styles.shapeTwelve} style={{
            transform: `translate(${calculateMove(4.00).moveX}px, ${calculateMove(5.0).moveY}px)`,
            transition: isMouseInFrame ? 'none' : 'transform 100ms ease-out',
          }}
          onAnimationEnd={resetShapePositions}
        >
            <Image src="/img/shape-12-1.png" width={100} height={100} alt="shape-Twelve" />
        </div>

        <div className={styles.shapeThirteen} style={{
            transform: `translate(${calculateMove(3.50).moveX}px, ${calculateMove(8.50).moveY}px)`,
            transition: isMouseInFrame ? 'none' : 'transform 100ms ease-out',
          }}
          onAnimationEnd={resetShapePositions}
        >
            <Image src="/img/shape-13-2.png" width={100} height={100} alt="shape-Thirteen" />
        </div>

        <div className={styles.shapeFourteen} style={{
            transform: `translate(${calculateMove(6.50).moveX}px, ${calculateMove(3.50).moveY}px)`,
            transition: isMouseInFrame ? 'none' : 'transform 100ms ease-out',
          }}
          onAnimationEnd={resetShapePositions}
        >
            <Image src="/img/shape-14.png" width={100} height={100} alt="shape-Fourteen" />
        </div>

        <div className={styles.shapeFifteen} style={{
            transform: `translate(${calculateMove(4.50).moveX}px, ${calculateMove(7.50).moveY}px)`,
            transition: isMouseInFrame ? 'none' : 'transform 100ms ease-out',
          }}
          onAnimationEnd={resetShapePositions}
        >
            <Image src="/img/shape-15.png" width={100} height={100} alt="shape-Fifteen" />
        </div>
        
      </div>
    </div>
  );
};

export default ParallaxBG;
