"use client"

import React from 'react'
import styles from './underfix.module.css'
import Image from 'next/image'

const UnderFix = () => {
  return (
    <div className={styles.container}>
        <h1>This page is under construction</h1>
        <Image src="/img/pageError.png"  width={650} height={300} alt="PAGE UNDER REPAIR"/>
    </div>
  )
}

export default UnderFix
