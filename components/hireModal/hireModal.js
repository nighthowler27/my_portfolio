"use client"

import React, { useState, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaTimes } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './hiremodal.module.css';

const HireModal = ({ open, onClose }) => {
  const [state, handleSubmit] = useForm('mlekqlww');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [meetingType, setMeetingType] = useState('Online');
  const [socialMedia, setSocialMedia] = useState('');
  const fileInputRefs = useRef([]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!selectedDate || !selectedTime) {
      // Handle validation error for date and time selection
      return;
    }

    const formData = new FormData(event.target);
    formData.append(
      'message',
      `${formData.get('message')}\n\nDate: ${selectedDate.toLocaleDateString()}\nTime: ${selectedTime.toLocaleTimeString()}`
    );
    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        formData.append('files', file);
      });
    }

    try {
      await handleSubmit(formData);
      // Handle successful form submission
    } catch (error) {
      // Handle error during form submission
    }
  };

  const handleMeetingTypeChange = (event) => {
    setMeetingType(event.target.value);
  };

  const isFileSizeExceeded =
  selectedFiles.reduce((totalSize, file) => {
    return totalSize + file.size;
  }, 0) > 20 * 1024 * 1024; // Total file size limit: 20MB


  const handleFileChange = (event, index) => {
    const updatedFiles = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles[index] = updatedFiles[0];
      return newFiles;
    });
  };

  const handleFileDelete = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    fileInputRefs.current[index].value = null;
  };

  const handleFileReupload = (index) => {
    fileInputRefs.current[index].click();
  };

  const renderFileInputs = () => {
    return selectedFiles.map((file, index) => (
      <div key={index}>
        {file && (
          <div>
            {/* Existing code */}
          </div>
        )}
        {!file && (
          <div>
            <input
              type="file"
              accept=".jpg, .jpeg, .png, .pdf, .psd, .doc,"
              onChange={(event) => handleFileChange(event, index)}
              ref={fileInputRefs.current[index]} // Assign ref to the file input
            />
          </div>
        )}
      </div>
    ));
  };

  const getFileSizeString = (size) => {
    const fileSizeInKB = size / 1024;
    if (fileSizeInKB < 1024) {
      return `${fileSizeInKB.toFixed(2)} KB`;
    }
    const fileSizeInMB = fileSizeInKB / 1024;
    return `${fileSizeInMB.toFixed(2)} MB`;
  };

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
              {state.succeeded ? (
                <div className={styles.verificationMessage}>
                  <p>Form submitted successfully!</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className={styles.appointmentForm}>
                  <div className={styles.modalLeft}>
                    <p className={styles.modalInstruction}>• Tell your name and where to contact you.</p>
                    <div className={styles.appFormGroup}>
                      <input type="text" name="name" className={styles.appFormControl} placeholder="NAME" required />
                    </div>
                    <div className={styles.appFormGroup}>
                      <input type="email" name="email" className={styles.appFormControl} placeholder="EMAIL" required />
                    </div>
                    <div className={styles.appFormGroup}>
                      <input
                        type="text"
                        name="contactNo"
                        className={styles.appFormControl}
                        placeholder="CONTACT NO"
                      />
                    </div>
                    <div className={styles.appFormGroup}>
                      <input
                        type="text"
                        name="subjectTitle"
                        className={styles.appFormControl}
                        placeholder="SUBJECT TITLE"
                      />
                    </div>
                    <div className={`${styles.appFormGroup} ${styles.message}`}>
                      <textarea
                        name="message"
                        className={styles.appFormControl}
                        placeholder="MESSAGE"
                        required
                      />
                    </div>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                    <div className="FileUploadSection">
                      {renderFileInputs()}
                    </div>
                    {!isFileSizeExceeded && selectedFiles.length < 5 && (
                      <div>
                        <input
                          type="file"
                          accept=".jpg, .jpeg, .png"
                          onChange={(event) => handleFileChange(event, selectedFiles.length)}
                          ref={(el) => (fileInputRefs.current[selectedFiles.length] = el)}
                        />
                        <button onClick={() => document.getElementById('fileUpload').click()}>
                          Add Another File
                        </button>
                      </div>
                    )}
                  </div>
                  <div className={styles.modalRight}>
                    <p className={styles.modalInstruction}>• Choose your preferred date and time</p>
                    <div className={styles.dateTIme}>
                      <p>Select Date:</p>
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select date"
                        className={styles.appFormControl}
                        required
                      />
                    </div>
                    <div className={styles.dateTIme}>
                      <p>Select Time:</p>
                      <DatePicker
                        selected={selectedTime}
                        onChange={(time) => setSelectedTime(time)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="HH:mm"
                        placeholderText="Select time"
                        className={styles.appFormControl}
                        required
                      />
                    </div>
                    <p className={styles.modalInstruction}>• Additional Info</p>
                    <div className="meetingSelector">
                      <p>Meeting Type:</p>
                      <select value={meetingType} onChange={handleMeetingTypeChange} className={styles.appFormControl}>
                        <option value="Online">Online</option>
                        <option value="In-person">In-person</option>
                      </select>
                    </div>
                    {meetingType === 'Online' && (
                      <div className={styles.appFormGroup}>
                        <input
                          type="text"
                          name="meetingLink"
                          className={styles.appFormControl}
                          placeholder="Meeting Link"
                        />
                      </div>
                    )}
                    <div className={styles.appFormGroup}>
                      <input
                        type="text"
                        name="socialMedia"
                        className={styles.appFormControl}
                        placeholder="Social Media Profile (Optional)"
                        value={socialMedia}
                        onChange={(event) => setSocialMedia(event.target.value)}
                      />
                    </div>
                    <div className={styles.modalFooter}>
                      <button type="submit" className={styles.appointmentSubmitBtn} disabled={state.submitting}>
                        {state.submitting ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HireModal;
