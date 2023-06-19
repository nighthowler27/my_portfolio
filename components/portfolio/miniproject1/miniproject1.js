"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../project.module.css'
import Window from '@/components/window/window'
import MiniProj1Modal from '../miniproject1/miniProj1Modal/miniProj1Modal'


const MiniProject1 = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  return (
    <div className={styles.card}>

        <div className={styles.miniScreen}>

            <div className={styles.imageContainer}>
                <Image src="/img/miniProject1.png" fill={true} alt="miniProject1.png" className={styles.image} />
            </div>

            <div className={styles.textBox}>
                <p>Mini Project 1</p>

                <button type="button" className={styles.portBtn} onClick={openModal}>View</button>
            </div>

        </div>
            {isModalOpen && (
            <MiniProj1Modal open={isModalOpen} onClose={closeModal}/>
            )}

        <Window className={styles.windowComp} />
    </div>
  )
}

export default MiniProject1
