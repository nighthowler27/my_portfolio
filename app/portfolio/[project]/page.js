"use client"
import React, { useState } from 'react'
import styles from "../page.module.css"
import Window from '@/components/window/window'
import Image from 'next/image'
import Modal from '@/components/modal/modal'
import UploadSection from '@/components/uploadsection/uploadsection'


const Project = () => {
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
          <div className={styles.card}>
            <div className={styles.miniScreen}>
              <div className={styles.imageContainer}>
                <Image src="/img/miniProject1.png" fill={true} alt="miniProject1.png" className={styles.image} />
              </div>
              <div className={styles.textBox}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi, veniam cum odit ab tempore! Dicta dignissimos minima a, sequi recusandae deserunt...</p>
                <button type="button" className={styles.portBtn} onClick={openModal}>Read More</button>
              </div>
            </div>
            {isModalOpen && (
              <Modal />
            )}
            <Window className={styles.windowComp} />
          </div>
        </div>
      </div>

      <UploadSection />
    </div>
  );
};

export default Project
