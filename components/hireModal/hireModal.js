"use client"
import React, { useState } from 'react';
import Modal from '@/components/modal/modal';
import styles from './hiremodal.module.css';

const HireModal = () => {
    const [openModal, setOpenModal] = useState(false);



    return (
    <div>
        <button 
        onClick={() => setOpenModal(true)} 
        className={styles.modalButton}>
          Modal
        </button>
        <Modal 
        open={openModal} 
        onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default HireModal;
