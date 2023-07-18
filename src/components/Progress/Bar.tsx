import React from 'react'
import styles from './styles.module.css'

export default function Bar({activeBarRef}) {
  return (
    <div className={styles.progressBar}>
        <div className={styles.progressBarPercentage} ref={activeBarRef} style={{width: "00%"}}></div>
        <div className={styles.progressBarBg}></div>
    </div>
  )
}
