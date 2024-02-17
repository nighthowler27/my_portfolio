import React from 'react'
import styles from './promobar.module.css'

const PromoBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.content}>
                PROMO BAR
            </div>
        </div>
    </div>
  )
}

export default PromoBar