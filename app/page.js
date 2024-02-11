"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ParallaxBG from '@/components/parallaxBG/parallaxBG'
import HireModal from '@/components/hireModal/hireModal'
import ResumeModal from '@/components/resumeModal/resumeModal'

export default function Home() {
    const [isHireModalOpen, setHireModalOpen] = useState(false);
    const [isResumeModalOpen, setResumeModalOpen] = useState(false);
    const [isMouseOverMyPic, setIsMouseOverMyPic] = useState(false);
    const [isCursorOverMyPic, setCursorOverMyPic] = useState(false);

    const openHireModal = () => {
    setHireModalOpen(true);
    };

    const closeHireModal = () => {
    setHireModalOpen(false);
    };

    const openResumeModal = () => {
    setResumeModalOpen(true);
    };

    const closeResumeModal = () => {
    setResumeModalOpen(false);   
    };

    useEffect(() => {
        if (isHireModalOpen || isResumeModalOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.overflowX = 'hidden';
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.overflowX = 'hidden';
            document.body.style.overflowY = 'auto';
        };
        
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setTimeout(() => {
                    closeHireModal();
                    closeResumeModal();
                }, 1000); 
            }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };

        
    }, [isHireModalOpen, isResumeModalOpen]);
   
  return (
    <div className="landingMain">
        <div className="landingPage">      
            <div className="parallaxBG">
                <ParallaxBG />
            </div>    
            
            <div className="contentLanding">
                <div className="leftside">
                    <div className="descBox">
                        <div className="myName">
                            <h1 className="greet">Hi, I&apos;m</h1>
                            <h1>Stephen</h1>
                        </div>
                        <h3>(The Jack of All Trades)</h3>   
                        <h3>A Proud Certified</h3>                   
                        <h2 aria-label="Hi! I'm a developer"> 
                        &nbsp;<span className="typewriter thick"></span>
                        </h2>
                        <p>
                            I love learning new skills that can help me in my future quest.
                            I have no problem being out of my comfort zone, that is when I learned the most.
                            Limation is my marker to go beyond and step up.
                        </p>
                        <button type="button" className="hireBtn" onClick={openHireModal}>Set an Appointment</button>

                        {isHireModalOpen && (
                            <HireModal open={isHireModalOpen} onClose={closeHireModal}/>
                        )}
                    </div>
                </div>

                <div className="rightside">
                    {/* <div 
                        style={{
                            width: '800px',
                            backgroundColor: 'red',
                            display: 'flex',
                            position: 'relative',
                            justifySelf: 'center',
                            justifyContent: 'center',
                            alignContent: 'center',
                        }}>
                        <Image 
                            src="/img/trendy_bg.jpeg"
                            width={820} height={800}
                            alt="trendy_bg.jpeg"
                            style={{
                                position: 'absolute',
                                overflow: 'auto',
                                zIndex: '0',
                            }}
                        />
                    </div> */}
                    <div className="resumeBtn">
                    <button type="button" className="CvResumeBtn" onClick={openResumeModal}>CV | Resume</button>

                    {isResumeModalOpen && (
                        <ResumeModal open={isResumeModalOpen} onClose={closeResumeModal}/>
                    )}
                    </div>
                    
                    <div className="myPic">
                        <Image 
                            src="/img/homepage_pic.png"
                            fill={true}
                            alt="homepage_pic.png"
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                            }}
    
                        />
                        <div className="picBg"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
