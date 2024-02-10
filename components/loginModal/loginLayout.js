
import React from 'react'
import styles from '../loginModal/login.module.css';
import Image from 'next/image'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";

export default function LoginLayout({children}) {
    return (
      <div className={styles.loginContainer}>
          <div className={styles.loginWrapper}>
                <div className={styles.leftSide}>
            
                    <Image 
                        src="/img/workers_login.jpeg"
                        width={800} height={700}
                        alt="workers_login.jpeg"
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '25px 0px 0px 0px',
                            position: 'absolute',
                            zIndex: '0',
                        }}
                    />

                    <div className={styles.loginAccounts}>
                        <div className={styles.inputBttnGoogle}>
                            <button type="submit" className={styles.button}>
                            <p className={styles.loginIcons}><FcGoogle /></p>
                            <p className={styles.loginTexts}>Google</p>
                            </button>
                        </div>
                        <div className={styles.inputBttnFacebook}>
                            <button type="submit" className={styles.button}>
                            <p className={styles.loginIcons}><FaFacebook /></p>
                            <p className={styles.loginTexts}>Facebook</p>
                            </button>
                        </div>
                        <div className={styles.inputBttnGithub}>
                            <button type="submit" className={styles.button}>
                            <p className={styles.loginIcons}><ImGithub /></p>
                            <p className={styles.loginTexts}>Github</p>
                            </button>
                        </div>
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