"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import ParallaxBG from '@/components/parallaxBG/parallaxBG'
import Link from 'next/link'
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

    
  return (
    <div className="landingMain">

        <div className="landingPage">
            
            <div className="parallaxBG">
                <ParallaxBG />
            </div>    
            
            <div className="contentLanding">
            <div className="leftside">
                <div className="descBox">
                    <h1>Hi, I&apos;m Stephen</h1>
                    <h2 aria-label="Hi! I'm a developer"> 
                    <span>a certified </span>&nbsp;<span className="typewriter thick"></span>
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
                <div className="resume-btn">
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
                    />
                </div>
            </div>
            </div>
        </div>
    </div>

  )
}
