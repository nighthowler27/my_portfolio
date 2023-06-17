"use client"
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import TextField from '@mui/material/TextField';
import { FaTimes } from 'react-icons/fa';
import styles from './hiremodal.module.css';
import Calendar from "@/components/calendar/calendar";
import TimeSelector from "@/components/time/time";
import MeetingType from "@/components/meetingPurpose/meetingType";

const HireModal = ({ open, onClose }) => {
    const [state, handleSubmit] = useForm("mknadbvj");
    return (
        <>
        {open && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                
                <div className={styles.modalBtn}>
                    <button type="button" className={styles.closeBtn} onClick={onClose}>
                    <FaTimes />
                    </button>
                </div>

                <div className={styles.modalBanner}>
                    <p>Banner Image</p>
                </div>
                <div className={styles.modalContent}>
             
                <form onSubmit={handleSubmit}>
                    <div className={styles.modalLeft}>
                        <TextField
                        required
                        id="outlined-required"
                        label="NAME"
                        className={styles.inputName}
                        />

                        <TextField
                        required
                        id="outlined-required"
                        label="EMAIL"
                        className={styles.inputEmail}
                        />

                        <TextField
                        required
                        id="outlined-required"
                        label="CONTACT NO."
                        className={styles.inputContactNo}
                        />

                        <TextField
                        id="filled-multiline-static"
                        label="Notes, concerns or requirements"
                        multiline
                        maxRows={4}
                        className={styles.inputTextArea}
                        />   
                    </div>

                    <div className={styles.modalRight}>
            
    
                        <h2>Choose a date and time</h2>

                        <div className="dateTIme">
                            
                            <Calendar className={styles.datePicker} />
                        
                            <TimeSelector />

                        </div> 

                        <h2>Preferred Platform</h2>

                        <div className="meetingSelector">
                        <MeetingType />
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
                </form>

              </div>

            </div>
          </div>
        )}
      </>
  );
};

export default HireModal;
