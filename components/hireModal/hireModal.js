"use client"
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import TextField from '@mui/material/TextField';
import { FaTimes } from 'react-icons/fa';
import styles from './hiremodal.module.css';
import Calendar from "@/components/calendar/calendar";
import TimeSelector from "@/components/time/time";
import MeetingType from "@/components/meetingPurpose/meetingType";
import UploadSection from '../uploadsection/uploadsection';

const HireModal = ({ open, onClose }) => {
    const [state, handleSubmit] = useForm("mlekqlww");
    if (state.succeeded) {
        return (
            <div>Thank you! I will review your booking and confirm it as soon as I can</div>
        );
      }
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
                        <p className={styles.modalInstruction}>• Tell your name and where to contact you.</p>
                        
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

                        <UploadSection />   
                    </div>

                    <div className={styles.modalRight}>
            
    
                        <p className={styles.modalInstruction}>• Choose your preferred date and time</p>

                        <div className={styles.dateTIme}>
                            
                            <Calendar className={styles.datePicker} />
                        
                            <TimeSelector className={styles.datePicker}/>

                        </div> 

                        <p className={styles.modalInstruction}>• Additional Info</p>

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
                        Book
                    </button>
                    </div>
                </form>
                </div>

                <div className={styles.modalFooter}>
                    <p>*Please check if all information are correct before booking</p>
                </div>

            </div>
          </div>
        )}
      </>
  );
};

export default HireModal;
