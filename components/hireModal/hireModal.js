"use client"
import React, { useState, useEffect } from 'react'; // Import useEffect for DOMContentLoaded
import styles from './hiremodal.module.css';
import { useForm, ValidationError } from '@formspree/react';

import DatePicker from '@/components/dateTimePicker/DatePicker.js';
import DatePickerMUI from '@/components/dateTimePicker/DatePickerMUI.js';

const HireModal = ({ open, onClose }) => {
  const [value, setValue] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [showMeetingInputs, setShowMeetingInputs] = useState(false);
  const [selectedMeetingType, setSelectedMeetingType] = useState('');
  const [selectedSocialMedia, setSelectedSocialMedia] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [confirmationClose, setConfirmationClose] = useState(false);
  
  


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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleMeetingTypeChange = (event) => {
    setSelectedMeetingType(event.target.value);
    setSelectedSocialMedia(''); // Reset selected social media when meeting type changes
    setShowMeetingInputs(event.target.value === 'online'); // Check if 'online' is selected
  };

  const handleSocialMediaChange = (event) => {
    setSelectedSocialMedia(event.target.id);
  };

  const handleConfirmation = () => {
    setConfirmation(!confirmation);
  };

  const handleConfirmationClose = () => {
    // Toggle the confirmationClose state to show the "Sure?" button
    setConfirmationClose(!confirmationClose);
  };

  const handleFormSubmit = async (e) => {
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

  const [message, setMessage] = useState('');
  const characterLimit = 1000; // Change this to your desired character limit

  const handleTextareaChange = (event) => {
    const inputValue = event.target.value;
  
    if (inputValue.length <= characterLimit) {
      setMessage(inputValue);
    }
  };
  
  const [state, handleSubmit] = useForm("mlekqlww");

  if (state.succeeded) {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.modalBanner}>
                    <p>Banner Image</p>
                </div>

                <div className={styles.modalContentSuccess}>
                    <div className={styles.appointmentSent}>
                        <p>Thank you! I will review the appointment you&aposve set and will do my best to confirm it as soon as I can.</p>
                        <p>In the meantime, please feel free to visit my website and explore some of my projects, portfolio, and services that I offer. You might find something that interests you.</p>
                    </div>
                </div>

                <div className={styles.modalBtn}>
                    <button type="button" className={styles.closeBtn} onClick={onClose}>
                        Close
                    </button>
                </div>

                <div className={styles.modalFooter}>
                    
                </div>

            </div>
      </div>
    );
  }

  
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
                  <p>Let me know who are you and where can I contact to you.</p>
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
                                <p>Appoint Date and Time</p>
                                <div className={styles.appFormGroup}>
                                    {/* <DatePickerMUI 
                                    name="firstSched"
                                    value={value}
                                    required
                                    /> */}
                                    <DatePicker 
                                    name="schedule"
                                    value={value}
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
                                            required
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
                                            required
                                        />
                                        <label htmlFor="online">Online</label>
                                        </div>
                                    </div>
                                    
                                    {selectedMeetingType === 'onsite' && (
                                        <div className={`${styles.inputOnsite} ${styles.appFormControl} `}>
                                            <input
                                            className="onsiteLinkInput"
                                            type="text"
                                            id="onsiteMeetingLink" // Add a unique id
                                            name="onsiteMeetingLink" // Add a unique name
                                            placeholder="Enter Address or Location Link"
                                            required={selectedMeetingType === 'onsite'}
                                            />
                                        </div>
                                    )}
                                    
                                    {showMeetingInputs && (
                                        <div className={styles.meetingInputs}>
                                            <fieldset className={styles.socmedList} required>
                                                <legend>Choose a Social Media Platform</legend>
                                                <div className={styles.socmed}>
                                                <input
                                                    type="radio"
                                                    id="googleMeet"
                                                    name="MeetingPlatform"
                                                    value="GoogleMeet"
                                                    checked={selectedSocialMedia === 'googleMeet'}
                                                    onChange={handleSocialMediaChange}
                                                    required
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
                                                    required
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
                                                    required
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
                                                    required
                                                />
                                                <label htmlFor="skype">Skype</label>
                                                </div>
                                                <div className={styles.socmed}>
                                                <input
                                                    type="radio"
                                                    id="specific"
                                                    name="MeetingPlatform"
                                                    value="OtherSocialMedia"
                                                    checked={selectedSocialMedia === 'specific'}
                                                    onChange={handleSocialMediaChange}
                                                    required
                                                />
                                                <label htmlFor="specific">Others</label>
                                                </div>
                                            </fieldset>

                                            {selectedSocialMedia && (
                                                <div className={styles.linkInputs}>
                                                    <input
                                                    type="text"
                                                    id="meetingLink"
                                                    name="meetingLink"
                                                    placeholder={`Enter ${selectedSocialMedia} link`}
                                                    required
                                                    className={styles.appFormControl}
                                                    />
                                                </div>
                                            )}
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
                        className={`${styles.appFormControlMessage} ${styles.appFormControl}`}
                        placeholder="INSERT MESSAGE/SPECIAL INSTRUCTION"
                        required
                        value={message}
                        onChange={handleTextareaChange}
                    />
                    <div className={styles.textLimit}>
                        <p>{characterLimit - message.length} <span>/{characterLimit}</span></p>
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
                    {/* {!confirmation ? (
                        <button type="button" className={styles.appFormButton} onClick={handleConfirmation}>
                        Submit
                        </button>
                    ) : (
                        <button type="submit" className={styles.appFormButton}>
                        Yes!
                        </button>
                    )} */}
                    <button type="submit" className={styles.appFormButton}>
                        Submit!
                    </button>
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