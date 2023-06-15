import React from 'react'
import styles from '@/components/typewriter/typewriter.module.css'

const Typewriter = () => {
  return (
    <div>
      <h2 aria-label="Hi! I'm a developer"> a certified&nbsp;<span className={styles.typewriter.thick}></span></h2>
    </div>
  )
}

export default Typewriter
