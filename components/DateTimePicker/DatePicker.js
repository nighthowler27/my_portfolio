"use client"
import React, { useState } from "react";
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

export default function DatePicker() {
  const [value, setValue] = useState(new Date());

  // Function to format the date as "DD/MMMM/YYYY"
  const formatDate = (date) => {
    if (date) {
      const options = { day: '2-digit', month: 'long', year: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    }
    return ""; // Return an empty string if date is null or undefined
  };

  return (
    <div>
      <DateTimePicker onChange={setValue} value={value} name="schedule"/>
      {/* Display the formatted date */}
      <p>Selected Date: {formatDate(value)}</p>
    </div>
  );
}
