"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import MiniPoject1 from '@/components/portfolio/miniproject1/miniproject1'
import MiniPoject2 from '@/components/portfolio/miniproject2/miniproject2'
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
        <div className={styles.CardInfoContainer}>
            <h1>Full Stack Web Developer</h1>
            <h2>Projects</h2>
            <div className={styles.Cards}>
                
                    <MiniPoject1 className={styles.card} />
        
                    <MiniPoject2 className={styles.card} />
              
                    <CapstoneProject className={styles.card} />
                    
            </div>
        </div>
    </div>
  )
}

export default Portfolio

