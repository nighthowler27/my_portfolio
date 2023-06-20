"use client"

import React from 'react'
import styles from './error.module.css'
import Image from 'next/image'

const underFix = () => {
  return (
    <div className={styles.container}>
      <Image href={'/img/pageRepair.png'} alt="PAGE ERROR"/>
    </div>
  )
}

export default underFix
