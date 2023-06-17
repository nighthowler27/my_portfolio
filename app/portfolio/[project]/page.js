import React from 'react'
import Window from '@/components/window/window'
import styles from '../page.module.css'

const Project = () => {
  return (
    <div className={styles.container}>
        <div className={styles.CardInfoContainer}>
            <h1>Full Stack Web Developer</h1>
            <h2>Projects</h2>
            <div className={styles.Cards}>
                <div className={styles.card}>
                    <button type="button" className={styles.portBtn} >View Project</button>
                    <div className={styles.miniScreen}></div>
                    <Window className={styles.windowComp} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project
