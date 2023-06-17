"use client"
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import TextField from '@mui/material/TextField';
import { FaTimes } from 'react-icons/fa';
import styles from './hiremodal.module.css';
import Calendar from '@/components/calendar/calendar';
import TimeSelector from '@/components/time/time';
import MeetingType from '@/components/meetingPurpose/meetingType';
import UploadSection from '../uploadsection/uploadsection';

const HireModal = ({ open, onClose }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('09:00');
    const [meetingType, setMeetingType] = useState('Select');
    const [purpose, setPurpose] = useState('');
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    const handleTimeChange = (time) => {
      setSelectedTime(time);
    };
  
    const handleMeetingTypeChange = (selectedValue) => {
      setMeetingType(selectedValue);
    };
  
    const handlePurposeChange = (inputValue) => {
      setPurpose(inputValue);
    };

    const [state, handleSubmit] = useForm('mlekqlww');

  return (
    <>
      {open && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalTitle}>
              <p>SET AN APPOINTMENT MEETING</p>
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
                  <TextField required id="outlined-required" label="NAME" className={styles.inputName} />
                  <TextField required id="outlined-required" label="EMAIL" className={styles.inputEmail} />
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
                  {/* <UploadSection /> not yet */}
                </div>
                <div className={styles.modalRight}>
                  <p className={styles.modalInstruction}>• Choose your preferred date and time</p>
                  <div className={styles.dateTIme}>
                    <Calendar selectedDate={selectedDate} handleDateChange={handleDateChange} className={styles.datePicker} />
                    <TimeSelector selectedTime={selectedTime} handleTimeChange={handleTimeChange} className={styles.datePicker} />
                  </div>
                  <p className={styles.modalInstruction}>• Additional Info</p>
                  <div className="meetingSelector">
                  <MeetingType
                    handleMeetingTypeChange={handleMeetingTypeChange}
                    handlePurposeChange={handlePurposeChange}
                  />
                  </div>
                </div>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <div className={`${styles.appFormGroup} ${styles.buttons}`}>
                  <button type="submit" disabled={state.submitting} className={styles.appFormButton}>
                    Book
                  </button>
                </div>
              </form>
            </div>
            <div className={styles.modalFooter}>
              <p>*Please check if all information is correct before booking</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HireModal;
