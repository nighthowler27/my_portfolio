"use client"
import React from 'react'
import styles from './page.module.css'
import UnderFix from '@/components/pageConstruction/underFix'


const page = () => {
  return (
    <div className={styles.container}>
      <UnderFix />
    </div>
  )
}

export default page
