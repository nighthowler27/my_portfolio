"use client"
import { useState, useEffect } from 'react';
import { CircularProgress, LinearProgress } from '@material-ui/core';
import Image from 'next/image'

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
            <CircularProgress 
                style={{
                    width:'100px', 
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: 'lightblue',
                    boxShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00', 
                    }}
                />
            <br />
            <LinearProgress 
                variant="determinate" 
                value={progress} 
                style={{
                    width:'300px', 
                    height: '20px',
                    boxShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00', 
                    }}
                />
        </div>
    </div>
);
}
export default LoadingPage;


