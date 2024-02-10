"use client"
import { useState, useEffect } from 'react';
import { CircularProgress, LinearProgress } from '@material-ui/core';
import Image from 'next/image'

const Page = () => {
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
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            }}
        >
        <div 
            style={{ 
                display: 'flex', 
                width: '50vw', 
                height: '80vh',
                position: 'relative',
                borderRadius: '25px',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                }}
            >
            <Image 
                src="/img/under_fix.jpeg"
                width={600} height={600}
                alt="under_fix.jpeg"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                }}
            />
        </div>
    </div>
);
}
export default Page;


