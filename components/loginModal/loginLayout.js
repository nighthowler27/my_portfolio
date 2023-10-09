"use client"
import React from 'react'
import styles from '../loginModal/login.module.css';

export default function LoginLayout({children}) {
    return (
      <div className="flex h-screen bg-blue-400">
          <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2" >
              <div className={styles.imgStyle}>
                  <div className={styles.cartoonImg} ></div>
                  <div className={styles.cloud_one} ></div>
                  <div className={styles.cloud_two} ></div>
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