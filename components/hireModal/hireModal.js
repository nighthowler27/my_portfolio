"use client"
import React, { useState, useEffect } from 'react'; // Import useEffect for DOMContentLoaded
import styles from './hiremodal.module.css';
import { useForm, ValidationError } from '@formspree/react';

import DatePicker from '@/components/DateTimePicker/DatePicker.js';

const HireModal = ({ open, onClose }) => {
  const [value, setValue] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [showMeetingInputs, setShowMeetingInputs] = useState(false);
  const [selectedMeetingType, setSelectedMeetingType] = useState('');
  const [selectedSocialMedia, setSelectedSocialMedia] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [confirmationClose, setConfirmationClose] = useState(false);
  const [state, handleSubmit] = useForm("mlekqlww");


  // Use useEffect instead of DOMContentLoaded for event listener
  useEffect(() => {
    const onsiteCheckbox = document.getElementById('onsite');
    const addressInput = document.getElementById('meetingType'); // Use 'meetingType' instead of 'address'

    if (onsiteCheckbox && addressInput) {
      onsiteCheckbox.addEventListener('change', () => {
        if (onsiteCheckbox.checked) {
          addressInput.style.display = 'block';
        } else {
          addressInput.style.display = 'none';
        }
      });
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (onsiteCheckbox && addressInput) {
        onsiteCheckbox.removeEventListener('change', () => {
          if (onsiteCheckbox.checked) {
            addressInput.style.display = 'block';
          } else {
            addressInput.style.display = 'none';
          }
        });
      }
    };
  }, []); // Empty dependency array to run the effect only once

   // Function to format the date as "dd - mmmm - yyyy"
   const formatDate = (date) => {
    if (date) {
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    } else {
      return ''; // Or provide a default value if needed
    }
  };

  // Function to format the time in 12-hour format with AM/PM
  const formatTime = (date) => {
    if (date) {
      const options = { hour: 'numeric', minute: 'numeric', hour12: true };
      return date.toLocaleTimeString('en-US', options);
    } else {
      return ''; // Or provide a default time value if needed
    }
  }; 

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

    const handleMeetingTypeChange = (event) => {
    setSelectedMeetingType(event.target.id);
    setSelectedSocialMedia(''); // Reset selected social media when meeting type changes
    setShowMeetingInputs(event.target.id === 'online'); // Simplified condition
  };

  const handleSocialMediaChange = (event) => {
    setSelectedSocialMedia(event.target.id);
  };

  const handleConfirmation = () => {
    setConfirmation(!confirmation);
  };

  const handleConfirmationClose = () => {
    setConfirmationClose(!confirmationClose);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    // Format the selectedDate using formatDate function
    const formattedDate = formatDate(selectedDate);
  
    // Format the selectedDate using formatTime function
    const formattedTime = formatTime(selectedDate);
  
    // You can use formattedDate and formattedTime in your submission logic
    console.log('Formatted Date:', formattedDate);
    console.log('Formatted Time:', formattedTime);
  
    const result = await handleSubmit(e);
  
    if (result.succeeded) {
      // The form submission was successful, so we can close the modal.
      onClose();
    }
  };

  useEffect(() => {
    // Add event listener for the checkbox here (if needed)
    return () => {
      // Cleanup event listener here (if needed)
    };
  }, []);

  
  return (
    <>
      {open && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalBanner}>
              <p>Banner Image</p>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className={styles.modalContent}>
                <div className={styles.modalLeft}>
                  <p>Let me know who you are and how I can reach back to you.</p>
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
                                    name="emailAddress"
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
                                    name="CompanyName"
                                    className={styles.appFormControl} placeholder="COMPANY NAME"
                                />
                            </div>

                            <div className={styles.dateTime}>
                                <p>Appointment Date and Time</p>
                                <div className={styles.appFormGroup}>
                                    <DatePicker 
                                    name="schedule"
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    />
                                </div>
                                {/* <p>Select Time</p>
                                <div className={styles.appFormGroup}>
                                    <TimePicker
                                    value={selectedTime}
                                    onChange={handleTimeChange}
                                    />
                                </div> */}
                            </div>

                            <div className={styles.meetingMode}>
                                <p>Mode of Meeting</p>
                                <div className={styles.meetingPicker}>
                                    <div className={styles.meetingChoice}>
                                        <div className={styles.meetingList}>
                                        <input
                                            type="radio"
                                            id="onsite"
                                            name="meetingType"
                                            value="onsite"
                                            checked={selectedMeetingType === 'onsite'}
                                            onChange={handleMeetingTypeChange}
                                        />
                                        <label htmlFor="onsite">Onsite</label>
                                        
                                        </div>

                                        <div className={styles.meetingList}>
                                        <input
                                            type="radio"
                                            id="online"
                                            name="meetingType"
                                            value="online"
                                            checked={selectedMeetingType === 'online'}
                                            onChange={handleMeetingTypeChange}
                                        />
                                        <label htmlFor="online">Online</label>
                                        </div>
                                    </div>
                                    
                                    {selectedMeetingType === 'onsite' && (
                                        <div className={`${styles.inputOnsite} ${styles.appFormControl} `}>
                                            <input
                                            type="text"
                                            id="onsiteMeetingLink" // Add a unique id
                                            name="onsiteMeetingLink" // Add a unique name
                                            placeholder="Enter Address or Location Link"
                                            />
                                        </div>
                                    )}
                                    
                                    {showMeetingInputs && (
                                        <div className={styles.meetingInputs}>
                                            <div className={styles.socmedList}>
                                                <div className={styles.socmed}>
                                                    <input
                                                        type="radio"
                                                        id="googleMeet"
                                                        name="MeetingPlatform"
                                                        value="GoogleMeet"
                                                        checked={selectedSocialMedia === 'googleMeet'}
                                                        onChange={handleSocialMediaChange}
                                                    />
                                                    <label htmlFor="googleMeet">Google Meet</label>
                                                </div>

                                                <div className={styles.socmed}>
                                                    <input
                                                        type="radio"
                                                        id="zoom"
                                                        name="MeetingPlatform"
                                                        value="Zoom"
                                                        checked={selectedSocialMedia === 'zoom'}
                                                        onChange={handleSocialMediaChange}
                                                    />
                                                    <label htmlFor="zoom">Zoom</label>
                                                </div>

                                                <div className={styles.socmed}>
                                                    <input
                                                        type="radio"
                                                        id="discord"
                                                        name="MeetingPlatform"
                                                        value="Discord"
                                                        checked={selectedSocialMedia === 'discord'}
                                                        onChange={handleSocialMediaChange}
                                                    />
                                                    <label htmlFor="discord">Discord</label>
                                                </div>

                                                <div className={styles.socmed}>
                                                    <input
                                                        type="radio"
                                                        id="skype"
                                                        name="MeetingPlatform"
                                                        value="Skype"
                                                        checked={selectedSocialMedia === 'skype'}
                                                        onChange={handleSocialMediaChange}
                                                    />
                                                    <label htmlFor="skype">Skype</label>
                                                </div>
                                                <div className={styles.socmed}>
                                                    <input
                                                        type="radio"
                                                        id="otherSoc"
                                                        name="MeetingPlatform"
                                                        value="OtherSocialMedia"
                                                        checked={selectedSocialMedia === 'otherSoc'}
                                                        onChange={handleSocialMediaChange}
                                                    />
                                                    <label htmlFor="otherSoc">Others</label>
                                                </div>
                                            </div>
                                            <div className={styles.linkInputs}>
                                                    {selectedSocialMedia === 'googleMeet' && (
                                                        <div className={`${styles.inputOnsite} ${styles.appFormControl}`}>
                                                        <input
                                                        type="text"
                                                        id="meetingLink"
                                                        name="meetingLink"
                                                        placeholder="Enter Google Meet link"
                                                        />
                                                        </div>
                                                    )}
                                                    {selectedSocialMedia === 'zoom' && (
                                                        <div className={`${styles.inputOnsite} ${styles.appFormControl}`}>
                                                        <input
                                                        type="text"
                                                        id="meetingLink"
                                                        name="meetingLink"
                                                        placeholder="Enter Zoom link"
                                                        />
                                                        </div>
                                                    )}
                                                    {selectedSocialMedia === 'discord' && (
                                                        <div className={`${styles.inputOnsite} ${styles.appFormControl}`}>
                                                        <input
                                                        type="text"
                                                        id="meetingLink"
                                                        name="meetingLink"
                                                        placeholder="Enter Discord link"
                                                        />
                                                        </div> 
                                                    )}
                                                    {selectedSocialMedia === 'skype' && (
                                                        <div className={`${styles.inputOnsite} ${styles.appFormControl}`}>
                                                        <input
                                                        type="text"
                                                        id="meetingLink"
                                                        name="meetingLink"
                                                        placeholder="Enter Skype link"
                                                        />
                                                        </div>
                                                    )}
                                                    {selectedSocialMedia === 'otherSoc' && (
                                                        <div className={styles.inputOnsite}>
                                                            <div className={styles.appFormControl}>
                                                            <input
                                                            type="text"
                                                            id="meetingLink"
                                                            name="OtherAppName"
                                                            placeholder="Social Media platform or App Name"
                                                            />
                                                            </div>
                                                            
                                                            <div className={styles.appFormControl}>
                                                            <input
                                                            type="text"
                                                            id="meetingLink"
                                                            name="otherAppMeetingLink"
                                                            placeholder="Enter Meeting link"
                                                            />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                        </div>
                                    )}
                                </div>

                            </div>

                </div>

                <div className={styles.modalRight}>
                            
                                <p>Additional Info</p>                        
                                <div className={styles.appFormGroup}>
                                    <input
                                        type="text"
                                        name="MeetingPurpose"
                                        className={styles.appFormControl} placeholder="PURPOSE OF THE APPOINTMENT"
                                    />
                                </div>
                                
                                <div className={`${styles.appFormGroup} ${styles.message}`}>
                                    <textarea
                                        name="Message/Instruction"
                                        className={`${styles.appFormControlMessage} ${styles.appFormControl}`} placeholder="INSERT MESSAGE/SPECIAL INSTRUCTION"
                                        required
                                    />

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
                    {!confirmation ? (
                        <button type="button" className={styles.appFormButton} onClick={handleConfirmation}>
                        Submit
                        </button>
                    ) : (
                        <button type="submit" className={styles.appFormButton}>
                        Yes!
                        </button>
                    )}
                </div>
               </div> 
              </div>
            </form>

            <div className={styles.modalBtn}>
              {!confirmationClose ? (
                <button type="button" className={styles.closeBtn} onClick={handleConfirmationClose}>
                  Close
                </button>
              ) : (
                <button type="button" className={styles.closeBtn} onClick={onClose}>
                  Sure?
                </button>
              )}
            </div>

            <div className={styles.modalFooter}>
              <p>
                {confirmation
                  ? 'Did you check all information?'
                  : '*Make sure to enter correct information'}
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default HireModal;