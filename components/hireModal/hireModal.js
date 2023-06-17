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

                <div className={styles.modalTitle}>
                    <p>SET AN APPOINTMENT MEETING </p>
                </div>
                
                <div className={styles.modalBtn}>
                    <button type="button" className={styles.closeBtn} onClick={onClose}>
                    <FaTimes />
                    </button>
                </div>

                <div className={styles.modalBanner}>
                    <p>Banner Image</p>
                </div>

                <div className={styles.modalContent}>
             
                <form onSubmit={handleSubmit} className={styles.appointmentForm}>

                    <div className={styles.modalLeft}>
                        <p>Tell me your name and how can I contact you.</p>
                        
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
                        label="Special notes, concerns or requirements"
                        multiline
                        maxRows={4}
                        className={styles.inputTextArea}
                        />   
                    </div>

                    <div className={styles.modalRight}>
            
    
                        <p>Choose your preferred date and time</p>

                        <div className="dateTIme">
                            
                            <Calendar className={styles.datePicker} />
                        
                            <TimeSelector className={styles.datePicker}/>

                        </div> 

                        <p>Additional Info</p>

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

                <div className={styles.modalFooter}>
                    <p>Banner Image</p>
                </div>

            </div>
          </div>
        )}
      </>
  );
};

export default HireModal;
