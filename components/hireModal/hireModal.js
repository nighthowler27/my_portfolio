"use client"
import React from 'react'
import styles from './hiremodal.module.css';

const HireModal = ({ open, onClose }) => {
    return (
        <>
          {open && (
            <div className={styles.modalOverlay}>
              <div className={styles.modal}>
                <div className={styles.modalBanner}>
                  <p>Banner Image</p>
                </div>
  
                <div className={styles.modalContent}>
                  <div className={styles.modalLeft}>
                    <h1>Project: School Website</h1>
                    <h2>Group Name: Team M.E.R.S.</h2>
                    <h2>Date Started: DD/MM/YYYY</h2>
                    <h2>Date Completed: DD/MM/YYYY</h2>
                    <h2>Contributors/Members:</h2>
                    
                    
                  </div>
                  <div className={styles.modalRight}>
                      <div className="modalRightContent">
                          <div className="RigthTitle">
                              <h2>Description</h2>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cum ipsum id quo saepe magnam libero esse eveniet, incidunt laboriosam nisi! Nobis corrupti ullam voluptate dolores necessitatibus maiores repudiandae placeat minus vitae doloremque fugit beatae quis fuga sapiente nesciunt aperiam perferendis rem nostrum, itaque ad culpa porro? Dolor nobis accusantium dignissimos ab dolore quam reiciendis vitae! Placeat dolorem perspiciatis aliquid animi dolor excepturi, officiis dolore quia sequi similique libero, quam rem. Facilis, laudantium! Cupiditate dignissimos porro dolores repellendus excepturi libero.</p>
                          </div>
                      </div>
                  </div>
                </div>
    
                <div className={styles.modalBtn}>
                  <button type="button" className={styles.closeBtn} onClick={onClose}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      );
    };

export default HireModal
