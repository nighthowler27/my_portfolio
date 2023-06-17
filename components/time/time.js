"use client"
import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import styles from './time.module.css'

export default function TimeSelector() {
    const currentTime = dayjs();
  return (
    <div className={styles.timeSelectorContainer}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker defaultValue={currentTime} />
        </LocalizationProvider>
    </div>

  );
}