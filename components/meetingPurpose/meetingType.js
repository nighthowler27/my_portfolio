"use client"

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import styles from './meeting.module.css';

const currencies = [
    {
      value: 'Select',
      label: 'Select',
    },
    {
      value: 'Online',
      label: 'Online',
    },
    {
      value: 'In-person',
      label: 'In-person',
    },
  ];
  
  const MeetingType = ({ handleMeetingTypeChange, handlePurposeChange }) => {
    const [purpose, setPurpose] = useState('');
    const [meetingType, setMeetingType] = useState('Select');
  
    const handleMeetingTypeSelection = (event) => {
      const selectedValue = event.target.value;
      setMeetingType(selectedValue);
      handleMeetingTypeChange(selectedValue);
    };
  
    const handlePurposeInput = (event) => {
      const inputValue = event.target.value;
      setPurpose(inputValue);
      handlePurposeChange(inputValue);
    };
  
    return (
      <div>
        <TextField
          required
          id="outlined-required"
          helperText="Please kindly state the purpose of the meeting"
          label="PURPOSE"
          value={purpose}
          onChange={handlePurposeInput}
        />
  
        <TextField
          id="outlined-select-currency-native"
          select
          label="MEETING TYPE"
          value={meetingType}
          onChange={handleMeetingTypeSelection}
          SelectProps={{
            native: true,
          }}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    );
  };
  
  export default MeetingType;