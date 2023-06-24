"use client"
import React from 'react'
import styles from './page.module.css';
import UnderFix from '@/components/pageConstruction/underFix'
import LoginModal from '@/components/loginModal/loginModal';

const page = () => {
    return (
        <div className={styles.container}>
            {/* <UnderFix /> */}

            <div className={styles.modalOverlay}>
              <div className={styles.modal}>
                 
                <div className={styles.modalContent}>
                  <div className={styles.modalLeft}>
                                       
                  </div>
                  <div className={styles.modalRight}>
                      <div className={styles.modalRightContent}>
                          <div className={styles.RigthTitle}>
                            Login
                              
                          </div>
                      </div>
                  </div>
                </div>
    
                <div className={styles.modalBtn}>
                  
                </div>
              </div>
            </div>
        </div>
      );
    };

export default page;
