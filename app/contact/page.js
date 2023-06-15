"use client"
import React from 'react';

import styles from './page.module.css';


import { ChakraProvider } from "@chakra-ui/react";
import AppContainer from '@/components/appContainer/AppContainer';
import theme from "@/config/theme";
import MessageBox from '@/components/messageBox/messageBox';

const Contact = () => {
    
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.screen}>
            <div className={styles.screenHeader}>
              <div className={styles.screenHeaderLeft}>
                <div className={`${styles.screenHeaderButton} ${styles.close}`}></div>
                <div className={`${styles.screenHeaderButton} ${styles.maximize}`}></div>
                <div className={`${styles.screenHeaderButton} ${styles.minimize}`}></div>
              </div>
              <div className={styles.screenHeaderRight}>
                <div className={styles.screenHeaderEllipsis}></div>
                <div className={styles.screenHeaderEllipsis}></div>
                <div className={styles.screenHeaderEllipsis}></div>
              </div>
            </div>
  
            <div className={styles.screenBody}>
              <div className={`${styles.screenBodyItem} ${styles.left}`}>
                <div className={styles.appTitle}>
                  <span className={styles.thankYou}>THANK YOU FOR VISITING!</span>
                  <span className={styles.sendMessage}>SEND ME A MESSAGE</span>
                </div>
                <div className={styles.appContact}>
                  <p className={styles.contactP}>CONTACT INFO:</p>
                  <p className={styles.contactN}>+63 028 5843 542 | +63 917 4765 836</p>
                  <p className={styles.contactE}>steph.cabunilas@hotmail.com</p>
                </div>
              </div>
  
              <div className={styles.screenBodyItem}>
                <div className={styles.appForm}>
                  <form onSubmit={handleSubmit}>
                    {/* <div className={styles.appFormGroup}>
                      <input type="text" name="name" className={styles.appFormControl} placeholder="NAME" required />
                    </div>
                    <div className={styles.appFormGroup}>
                      <input type="email" name="_replyto" className={styles.appFormControl} placeholder="EMAIL" required />
                    </div>
                    <div className={styles.appFormGroup}>
                      <input type="text" name="contactNo" className={styles.appFormControl} placeholder="CONTACT NO" />
                    </div>
                    <div className={styles.appFormGroup}>
                      <input type="text" name="subjectTitle" className={styles.appFormControl} placeholder="SUBJECT TITLE" />
                    </div>
                    <div className={`${styles.appFormGroup} ${styles.message}`}>
                      <textarea name="message" className={styles.appFormControl} placeholder="MESSAGE" required></textarea>
                    </div>
                    <ValidationError
                      prefix="Email"
                      field="_replyto"
                      errors={state.errors}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                    <div className={`${styles.appFormGroup} ${styles.buttons}`}>
                      <button type="submit" disabled={state.submitting} className={styles.appFormButton}>
                        Submit
                      </button>
                    </div> */}

                    <ChakraProvider theme={theme}>
                        
                            <MessageBox />
                        
                    </ChakraProvider>    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact