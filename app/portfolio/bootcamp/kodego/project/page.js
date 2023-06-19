"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import Image from 'next/image';
import MiniProject1 from '@/components/portfolio/miniproject1/miniproject1'
import MiniProject2 from '@/components/portfolio/miniproject2/miniproject2'
import CapstoneProject from '@/components/portfolio/capstoneproject/capstoneproject'

const Portfolio = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div className={styles.container}>
            <h1>Kodego Projects</h1>
            <div className={styles.CardInfoContainer}>

                <h1 className={styles.header}>Full Stack Web Developer</h1>
                <div className={styles.appIcons}>
                    <span> Application used:</span>

                    <div className={styles.iconBox}>
                          
                        <Image src="/icons/htmlIcon.png" alt="htmlIcon.png" width={50} height={50} />

                        <Image src="/icons/cssIcon.png" alt="htmlIcon.png" width={50} height={50} />

                        <Image src="/icons/jsIcon.png" alt="htmlIcon.png" width={50} height={50} />

                        <Image src="/icons/reactIcon.png" alt="htmlIcon.png" width={50} height={50} />

                        <Image src="/icons/nextJs.png" alt="htmlIcon.png" width={50} height={50} />

                        <Image src="/icons/mongoDBicon.png" alt="htmlIcon.png" width={50} height={50} />

                        <Image src="/icons/googleDev.png" alt="htmlIcon.png" width={120} height={50} />

                        <Image src="/icons/aws_s3.png" alt="htmlIcon.png" width={110} height={50} />

                        <Image src="/icons/sanityIO.png" alt="htmlIcon.png" width={110} height={50} />

                        <Image src="/icons/stripeLogo.png" alt="htmlIcon.png" width={100} height={50} />
                    </div>
                </div>
                

                <div className={styles.Cards}>

                    <MiniProject1 className={styles.card} />

                    <MiniProject2 className={styles.card} />

                    <CapstoneProject className={styles.card} />

                </div>

                
            </div>
        </div>
    )
}

export default Portfolio

