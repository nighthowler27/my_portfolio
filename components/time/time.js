import React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import styles from './time.module.css';

const TimeSelector = ({ selectedTime, handleTimeChange }) => {
  const currentTime = dayjs(selectedTime, 'HH:mm');

  const handleTimeSelected = (time) => {
    const formattedTime = dayjs(time).format('HH:mm');
    handleTimeChange(formattedTime);
  };

  return (
    <div className={styles.timeSelectorContainer}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          value={currentTime}
          onChange={handleTimeSelected}
          renderInput={(props) => <TextField {...props} />} // Render TextField instead of input
        />
      </LocalizationProvider>
    </div>
  );
};

export default TimeSelector;
