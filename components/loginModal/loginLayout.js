
import React from 'react'
import styles from '../loginModal/login.module.css';

export default function LoginLayout({children}) {
    return (
      <div className={styles.loginContainer}>
          <div className={styles.loginWrapper}>
              <div className={styles.leftSide}>
                <div className={styles.inputBttnGoogle}>
                    <button type="submit" className={styles.button}>
                    Google Account
                    </button>
                </div>
                <div className={styles.inputBttnFacebook}>
                    <button type="submit" className={styles.button}>
                    Facebook Account
                    </button>
                </div>
                <div className={styles.inputBttnGithub}>
                    <button type="submit" className={styles.button}>
                    Github Account
                    </button>
                </div>
              </div>
              <div className={styles.rightSide}>
                  <div className={styles.rightSideWrapper} >
                      {children}
                  </div>
              </div>
          </div> 
      </div>
    )
  }