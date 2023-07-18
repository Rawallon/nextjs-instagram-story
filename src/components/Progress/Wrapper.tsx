import React from 'react'
import Bar from './Bar'
import styles from './styles.module.css'

export default function Wrapper({length, activeBarId, activeBarRef }: any) {
  return (
    <div className={styles.progressWrapper}>
        {Array.from({ length }, (_, index) => index).map(idx=>{
            return <Bar key={idx} activeBarRef={idx == activeBarId ? activeBarRef : null} />
        })}
    </div>
  )
}
