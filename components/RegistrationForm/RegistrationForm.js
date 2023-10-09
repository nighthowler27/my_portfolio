import React, { useState } from 'react';
import styles from './registration.module.css'; // Create a CSS module for styling
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";

const RegisterForm = ({ onClose }) => {
  const [show, setShow] = useState({ password: false, conPassword: false });

  // Handle registration logic here

  return (
    <div className={`register-form ${show ? 'slide-in' : ''}`}>
      <form className="flex flex-col gap-2">
      <div className={styles.input_group}>
            <input
            type="text" 
            name="usrnamer"
            placeholder="Username"
            className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
            type="email" 
            name="email"
            placeholder="Email"
            className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
            type={`${show.password ? "text" : "password"}`} 
            name="password"
            placeholder="Password"
            className={styles.input_text}
            />
            <span className="icon flex items-center px-4" onClick={()=> setShow({...show, password: !show.password})}>
              <HiFingerPrint size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
            type={`${show.conPassword ? "text" : "password"}`} 
            name="conPassword"
            placeholder="Confirm Password"
            className={styles.input_text}
            />
            <span className="icon flex items-center px-4" onClick={()=> setShow({...show, conPassword: !show.conPassword})}>
              <HiFingerPrint size={25} />
            </span>
          </div>

          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Signup
            </button>
          </div>
      </form>

      {/* Close button */}
      <button onClick={onClose} className="close-button">
        Login
      </button>
    </div>
  );
};

export default RegisterForm;
