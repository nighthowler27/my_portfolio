"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './underloading.module.css'
import CustomProgressBar from './customProgress/customProgress'

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.loadingContainer}>
        <CustomProgressBar />
    </div>
);
}
export default LoadingPage;


