
import React from 'react'
import styles from '../loginModal/login.module.css';

export default function LoginLayout({children}) {
    return (
      <div className="flex h-screen bg-gray-400 rounded-md">
          <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2" >
              <div className={styles.socialMedia}>
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
              <div className="right flex flex-col justify-evenly" >
                  <div className="right-inner w-full text-center" >
                      {children}
                  </div>
              </div>
          </div> 
      </div>
    )
  }