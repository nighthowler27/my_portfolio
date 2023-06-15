import React from 'react'
import styles from "./window.module.css"

const Window = () => {
  return (
    <div className={styles.mainContainer}>

        <div className={styles.firstWindow}>

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
                        <span className={styles.question}>WHO AM I?</span>

                        </div>
                        
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Window
