"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './underloading.module.css'

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
    <div 
        style={{ 
            display: 'flex', 
            width: '50vw', 
            height: '80vh',
            position: 'relative',
            borderRadius: '25px',
            overflow: 'hidden',
            }}
        >
        <Image 
            src="/img/loading_page.jpeg"
            width={600} height={600}
            alt="loading_page.jpeg"
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 0,
            }}
        />
        
        <div 
            style={{ 
                display: 'flex', 
                flexDirection: 'column',
                position: 'absolute',
                alignItems: 'center', 
                justifyContent: 'center',
                left: '50%',
                top: '35%',
                transform: 'translate(-50%, -50%)',
                }}
            >
            <p
                style={{
                    position: 'absolute',
                    width: '100%',
                    left: '50%',
                    top: '35%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '10px',
                    textAlign: 'center',
                    zIndex: 1,
                }}
                >
                LOADING...
            </p>
            <div>CircularProgress</div>
            <br />
            <div>LinearProgress</div>
        </div>
    </div>
    // <div className={styles.loadingContainer}></div>
);
}
export default LoadingPage;


