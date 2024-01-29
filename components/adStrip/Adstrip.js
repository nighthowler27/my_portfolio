import React from 'react'
import styles from './adStrip.module.css'

const Adstrip = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.message}>
            <p>Hire me now!!!</p>
            <p>stephcabunilas@gmail.com</p>
            <p>+63 (02)8584-3542</p>
        </div>
        <div className={styles.message}>
            <p>Looking for professional Photo Editor???</p>
            <p>How about an amazing Web App Developer???</p>
        </div>
        <div className={styles.message}>
            <p>Avail the services that I offer!!!</p>
            <p>+63 917-476-5836</p>
        </div>
        
    </div>
  )
}

export default Adstrip