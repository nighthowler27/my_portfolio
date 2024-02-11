"use client"
import React, { useEffect, useState } from 'react';
import styles from './customProgress.module.css'

const ProgressBar = ({ value, max }) => {
  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressBarFill}
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  );
};

const CircularProgress = ({ value, max }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / max) * circumference;

  return (
    <svg className={styles.circularProgress} viewBox="0 0 120 120">
      <circle
        className={styles.circularProgressPath}
        cx="60"
        cy="60"
        r={radius}
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
      />
    </svg>
  );
};

const CustomProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
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
    <div className={styles.loadProgress}>
        <CircularProgress value={progress} max={5} />
        <ProgressBar value={progress} max={100} />

    </div>
  );
};

export default CustomProgressBar;


