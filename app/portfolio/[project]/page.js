"use client"
import React, { useState } from 'react'
import styles from "../page.module.css"
import Window from '@/components/window/window'
import Image from 'next/image'
import Modal from '@/components/modal/modal'
import CodeEditor from '@/components/appViewer/codeEditor'



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
        <CodeEditor />
    </div>
  );
};

export default Project
