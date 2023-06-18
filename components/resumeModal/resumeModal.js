"use client"
import React from 'react'
import styles from './resume.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { GoLinkExternal } from 'react-icons/go';
import Image from 'next/image'



const ResumeModal = ({ open, onClose }) => {
    return (
      <>
        {open && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                
            </div>
          </div>
        )};
      </>
    );
  };

export default ResumeModal;
