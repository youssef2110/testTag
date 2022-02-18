import Image from 'next/image'
import React from 'react'
import styles from 'styles/ProcessStyles/Navigation.module.scss'
import right from 'static/assets/ArrowRight.png'
import left from 'static/assets/ArrowLeft.png'

export default function footer({PreviousStep,SkipStep,NoNext}) {
  return (
    <div className={styles.Footer}>
        <div className={styles.Navigate} onClick={() => PreviousStep()}>
          <Image src={left} alt="left" height={17} width={13} />
          <span>Previous</span>
        </div>
        {!NoNext ? <div className={styles.Navigate} onClick={() => SkipStep()}>
          <span>Skip</span>
          <Image src={right} alt="right" height={17} width={13} />
        </div> : ''}
    </div>
  )
}
