"use client"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import styles from '@/components/inputField/input.module.css'

export default function InputTextFields() {
  return (
    
            <div className={styles.container}>
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
            </div>
  
  );
}