"use client"
import React from 'react'
import styles from './resume.module.css';

const ResumeModal = ({ open, onClose }) => {
    return (
        <>
          {open && (
            <div className={styles.modalOverlay}>
              <div className={styles.modal}>
                <div className={styles.modalBanner}>
                  <p>Banner Buttons</p>
                </div>
  
                <div className={styles.modalContent}>
                    <div className={styles.modalLeft}>

                        {/* Profile Section */}
                        <div className={styles.ProfileInfo}>
                            <div className={styles.ProPic}>
                            </div>
                            <div className={styles.ProfileName}>
                                <h1>Stephen M. Cabunilas</h1>
                                <h3>Jack of all Trades</h3>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className={styles.ContactInfo}>
                            <h1>Contact Info</h1>
                            <div className={styles.ContactNumber}>
                                Mobile number
                            </div>
                            <div className={styles.ContactNumber}>
                                Tel. No.
                            </div>
                            <div className={styles.ContactLink}>
                                Email Ad, website, skype, LinkedIn, Behance
                            </div>
                            <div className={styles.ContactAddress}>
                                Address
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className={styles.EducSec}>
                            <h1>Education</h1>
                            <div className={styles.EducInfo}>
                                <p>Date</p>
                                <h2>Program</h2>
                                <h3>School Name</h3>
                                <h4>location</h4>
                            </div>

                            <div className={styles.EducInfo}>
                                <p>Date</p>
                                <h2>Program</h2>
                                <h3>School Name</h3>
                                <h4>location</h4>
                            </div>

                            <div className={styles.EducInfo}>
                                <p>Date</p>
                                <h2>Program</h2>
                                <h3>School Name</h3>
                                <h4>location</h4>
                            </div>

                            <div className={styles.EducInfo}>
                                <p>Date</p>
                                <h2>Program</h2>
                                <h3>School Name</h3>
                                <h4>location</h4>
                            </div>
                        </div>

                        {/* Language Section */}
                        <div className={styles.Language}>
                            <h1>Languages</h1>
                            <div className={styles.LanInfo}>
                                English
                            </div>
                            <div className={styles.LanInfo}>
                                Filipino-Tagalog
                            </div>
                            <div className={styles.LanInfo}>
                                Cebuano-Bisaya
                            </div>
                        </div>

                        {/* Interest Section */}
                        <div className={styles.Language}>
                            <h1>Interests</h1>
                            <div className={styles.LanInfo}>
                                Hiking
                            </div>
                            <div className={styles.LanInfo}>
                                Gaming
                            </div>
                            <div className={styles.LanInfo}>
                                Camping
                            </div>
                            <div className={styles.LanInfo}>
                                Painting
                            </div>
                            <div className={styles.LanInfo}>
                                Swimming
                            </div>
                            <div className={styles.LanInfo}>
                                Reading
                            </div>
                            <div className={styles.LanInfo}>
                                Travelling
                            </div>
                            <div className={styles.LanInfo}>
                                Solving Puzzle
                            </div>
                            <div className={styles.LanInfo}>
                                Playing Musical Instruments
                            </div>
                        </div>

                    </div>
                    <div className={styles.modalRight}>
                    
                        {/* Profile Description */}
                        <div className={styles.ProfileDesc}>
                            <h2>Profile</h2>
                            <p>Profile Description</p>
                        </div>

                        {/* Experiences Section*/}
                        <div className={styles.Experience}>
                            <div className={styles.ExpInfo}>
                                <div className={styles.ExpInfoLeft}>
                                    <div className={styles.ExpDate}>
                                        <p>Date</p>
                                    </div>
                                    <div className={styles.ExpCompany}>
                                        <p>Copmany Name</p>
                                    </div>
                                </div>
                                <div className={styles.ExpInfoRight}>
                                    <div className={styles.ExpPosition}>
                                        <p>Tittle</p>
                                    </div>
                                    <div className={styles.ExpPosDesc}>
                                        <p>Description</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className={styles.SkillsSec}>

                        </div>
                                   
                    </div>
                </div>

                <div className={styles.modalFooter}>
                  <p>footer</p>
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

export default ResumeModal;
