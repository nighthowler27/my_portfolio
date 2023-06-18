"use client"
import React, { useState } from 'react'
import styles from "../page.module.css"
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
