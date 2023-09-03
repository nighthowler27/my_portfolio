"use client"
import React from 'react'
import styles from './hiremodal.module.css';
import { useForm, ValidationError } from '@formspree/react';

const HireModal = ({ open, onClose }) => {
    const [state, handleSubmit] = useForm("mlekqlww");

    return (
        <>
          {open && (
            <div className={styles.modalOverlay}>
              <div className={styles.modal}>
                <div className={styles.modalBanner}>
                  <p>Banner Image</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className={styles.modalContent}>
                    
                        <div className={styles.modalLeft}>

                            <div className={styles.appFormGroup}>
                            <input 
                                type="text" 
                                name="name" 
                                className={styles.appFormControl} placeholder="NAME" 
                                required 
                            />
                            </div>
                            <div className={styles.appFormGroup}>
                            <input 
                                type="email"
                                name="email"
                                className={styles.appFormControl} placeholder="EMAIL"
                                required
                            />
                            </div>
                            <div className={styles.appFormGroup}>
                            <input 
                                type="text"
                                name="contactNo"
                                className={styles.appFormControl} placeholder="CONTACT NO."
                                required 
                            />
                            </div>
                            <div className={styles.appFormGroup}>
                            <input 
                                type="text"
                                name="contactNo"
                                className={styles.appFormControl} placeholder="COMPANY NAME"
                            />
                            </div>

                        </div>

                        <div className={styles.modalRight}>
                         
                                <div className={styles.appFormGroup}>
                                    <input
                                        type="text"
                                        name="subjectTitle"
                                        className={styles.appFormControl} placeholder="PURPOSE OF THE APPOINTMENT"
                                    />
                                </div>
                                
                                <div className={`${styles.appFormGroup} ${styles.message}`}>
                                    <textarea
                                        name="message"
                                        className={styles.appFormControlMessage} placeholder="MESSAGE/SPECIAL INSTRUCTION"
                                        required
                                    />

                                </div>
                        </div>
                            <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                            />
                            <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                            />
                        <div className={`${styles.appFormGroup} ${styles.buttons}`}>
                            <button type="submit" disabled={state.submitting} className={styles.appFormButton}>
                                Submit
                            </button>
                        </div>
                        
                    </div>
                </form>  
    
                <div className={styles.modalBtn}>
                  <button type="button" className={styles.closeBtn} onClick={onClose}>
                    Close
                  </button>
                </div>

                <div className={styles.modalFooter}>
                  <p>FOOTER MESSAGE</p>
                </div>

              </div>
            </div>
          )}
        </>
      );
    };

export default HireModal
