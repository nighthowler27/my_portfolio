"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../project.module.css'
import Window from '@/components/window/window'
import CapstoneModal from './capstoneModal/capstoneModal'

const CapstoneProject = () => {
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
                <Image src="/img/miniProject2.png" fill={true} alt="miniProject1.png" className={styles.image} />
            </div>

            <div className={styles.textBox}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi, veniam cum odit ab tempore! Dicta dignissimos minima a, sequi recusandae deserunt...</p>

                <button type="button" className={styles.portBtn} onClick={openModal}>Read More</button>
            </div>

        </div>
            {isModalOpen && (
            <CapstoneModal open={isModalOpen} onClose={closeModal}/>
            )}

        <Window className={styles.windowComp} />
    </div>
  )
}

export default CapstoneProject
