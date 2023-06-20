"use client"

import React from 'react'
import styles from './underloading.module.css'
import Image from 'next/image'

const LoadingPage = () => {
  return (
    <div className={styles.container}>
        <h1>Loading...</h1>
        <Image src="/img/loading.png"  width={500} height={300} alt="PAGE UNDER REPAIR"/>
    </div>
  )
}

export default LoadingPage
