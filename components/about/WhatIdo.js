"use client"
import React from 'react'
import styles from './aboutme.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { GoLinkExternal } from 'react-icons/go';
import Contributor from '../contributors/capstonecontributor';
import Image from 'next/image'




const WhatIdo = ({ open, onClose }) => {
    return (
      <>
        {open && (
          <div className={styles.modalOverlay}>

            <div className={styles.modal}>

                <div className={styles.modalBtnTop}>
                    <button type="button" className={styles.closeBtnTop} onClick={onClose}>
                        Close
                    </button>
                </div>
                
              <div className={styles.modalContent}>

                <div className={styles.LeftsidePanel}>
                    Side Panel
                </div>

                <div className={styles.RightsidePanel}>

                    <div className={styles.modalBanner}>
                    <p>WHAT I DO?</p>
                    </div>

                    <div className={styles.RightPanelConent}>

                        <div className={styles.PanelContextsTitle}>
                           <p>Title</p>
                        </div>

                        <div className={styles.PanelContexts}>
                            <div className={styles.LeftColumn}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt qui iusto quidem hic molestias ipsam consequuntur! Tempore ullam sint beatae ut non nam inventore eius rem! Minima, doloremque possimus assumenda deleniti quam omnis quo fugiat perferendis veritatis animi, eius expedita consequuntur aliquid maxime repellendus obcaecati facere? Officia mollitia magni ipsum commodi adipisci corrupti blanditiis pariatur, modi fugit atque architecto quidem quasi ratione sequi reprehenderit molestiae asperiores perferendis! Cumque omnis eveniet dolor nam dolorum libero accusamus doloremque obcaecati blanditiis commodi, quae similique perferendis iste, odit error! Possimus optio quisquam quo necessitatibus sapiente assumenda autem sit beatae. Fugiat sed dolores quo tempore eos debitis ipsum voluptas eum explicabo recusandae, facere corrupti? Ipsa hic voluptates dolor repellat. Distinctio recusandae delectus eveniet possimus, ratione maiores tempora quos exercitationem at suscipit illum quaerat maxime fugit, commodi corrupti excepturi cumque quisquam temporibus quas ducimus minima. Distinctio est consectetur maxime ipsum. Deleniti rem numquam ipsa incidunt!</p>
                            </div>

                            <div className={styles.RightColumn}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt qui iusto quidem hic molestias ipsam consequuntur! Tempore ullam sint beatae ut non nam inventore eius rem! Minima, doloremque possimus assumenda deleniti quam omnis quo fugiat perferendis veritatis animi, eius expedita consequuntur aliquid maxime repellendus obcaecati facere? Officia mollitia magni ipsum commodi adipisci corrupti blanditiis pariatur, modi fugit atque architecto quidem quasi ratione sequi reprehenderit molestiae asperiores perferendis! Cumque omnis eveniet dolor nam dolorum libero accusamus doloremque obcaecati blanditiis commodi, quae similique perferendis iste, odit error! Possimus optio quisquam quo necessitatibus sapiente assumenda autem sit beatae. Fugiat sed dolores quo tempore eos debitis ipsum voluptas eum explicabo recusandae, facere corrupti? Ipsa hic voluptates dolor repellat. Distinctio recusandae delectus eveniet possimus, ratione maiores tempora quos exercitationem at suscipit illum quaerat maxime fugit, commodi corrupti excepturi cumque quisquam temporibus quas ducimus minima. Distinctio est consectetur maxime ipsum. Deleniti rem numquam ipsa incidunt!</p>
                            </div>
                        </div>

                        <div className={styles.PanelContextsTitle}>
                           <p>Title</p>
                        </div>

                        <div className={styles.PanelContexts}>
                            <div className={styles.LeftColumn}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt qui iusto quidem hic molestias ipsam consequuntur! Tempore ullam sint beatae ut non nam inventore eius rem! Minima, doloremque possimus assumenda deleniti quam omnis quo fugiat perferendis veritatis animi, eius expedita consequuntur aliquid maxime repellendus obcaecati facere? Officia mollitia magni ipsum commodi adipisci corrupti blanditiis pariatur, modi fugit atque architecto quidem quasi ratione sequi reprehenderit molestiae asperiores perferendis! Cumque omnis eveniet dolor nam dolorum libero accusamus doloremque obcaecati blanditiis commodi, quae similique perferendis iste, odit error! Possimus optio quisquam quo necessitatibus sapiente assumenda autem sit beatae. Fugiat sed dolores quo tempore eos debitis ipsum voluptas eum explicabo recusandae, facere corrupti? Ipsa hic voluptates dolor repellat. Distinctio recusandae delectus eveniet possimus, ratione maiores tempora quos exercitationem at suscipit illum quaerat maxime fugit, commodi corrupti excepturi cumque quisquam temporibus quas ducimus minima. Distinctio est consectetur maxime ipsum. Deleniti rem numquam ipsa incidunt!</p>
                            </div>

                            <div className={styles.RightColumn}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt qui iusto quidem hic molestias ipsam consequuntur! Tempore ullam sint beatae ut non nam inventore eius rem! Minima, doloremque possimus assumenda deleniti quam omnis quo fugiat perferendis veritatis animi, eius expedita consequuntur aliquid maxime repellendus obcaecati facere? Officia mollitia magni ipsum commodi adipisci corrupti blanditiis pariatur, modi fugit atque architecto quidem quasi ratione sequi reprehenderit molestiae asperiores perferendis! Cumque omnis eveniet dolor nam dolorum libero accusamus doloremque obcaecati blanditiis commodi, quae similique perferendis iste, odit error! Possimus optio quisquam quo necessitatibus sapiente assumenda autem sit beatae. Fugiat sed dolores quo tempore eos debitis ipsum voluptas eum explicabo recusandae, facere corrupti? Ipsa hic voluptates dolor repellat. Distinctio recusandae delectus eveniet possimus, ratione maiores tempora quos exercitationem at suscipit illum quaerat maxime fugit, commodi corrupti excepturi cumque quisquam temporibus quas ducimus minima. Distinctio est consectetur maxime ipsum. Deleniti rem numquam ipsa incidunt!</p>
                            </div>
                        </div>

                    </div>

                </div>
                
              </div>
  
              <div className={styles.modalBtn}>

                <div className={styles.webLinks}>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <p>Github Repository</p>
                    <AiFillGithub />
                  </a>
  
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <p>Live Link</p>
                    <GoLinkExternal />
                  </a>
                </div>


                <button type="button" className={styles.closeBtn} onClick={onClose}>
                  Close
                </button>

              </div>
            </div>
          </div>
        )}
      </>
    );
  };

export default WhatIdo;
