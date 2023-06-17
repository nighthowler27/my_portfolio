import React from 'react'
import styles from "./page.module.css"
import Window from '@/components/window/window'

const Portfolio = () => {
  return (
    <div className={styles.container}>

        <div className={styles.webDevCardContainer}>
            <h1>Full Stack Web Developer</h1>
            <h2>Projects</h2>
            <div className={styles.webDevCards}>
                <div className={styles.card}>
                    <Window />
                </div>
                <div className={styles.card}>
                    <Window />
                </div>
                <div className={styles.card}>
                    <Window />
                </div>
            </div>
        </div>

        <div className={styles.photogCardContainer}>
            <h1>Full Stack Web Developer</h1>
            <h2>Projects</h2>
            <div className={styles.photogCards}>
                <div className={styles.card}>
                    <Window />
                </div>
                <div className={styles.card}>
                    <Window />
                </div>
                <div className={styles.card}>
                    <Window />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio

