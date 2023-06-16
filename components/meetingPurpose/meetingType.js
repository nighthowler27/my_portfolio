"use client"
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

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

const MeetingType = () => {
  return (
        <div>
        <TextField
            required
            id="outlined-required"
            label="PURPOSE"
            helperText="Please kindly state the purpose of the meeting"
            />
        <TextField
        id="outlined-select-currency-native"
        select
        label="MEETING TYPE"
        defaultValue="Select"
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
 
  )
}

export default MeetingType
