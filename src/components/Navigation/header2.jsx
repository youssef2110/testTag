import React from 'react'
import Image from 'next/image'
import logo from 'static/assets/LogoBlueText.png'
import styles from 'styles/ProcessStyles/Navigation.module.scss'

export default function Header2() {
  return (
    <div className={styles.Header2}>
        <Image
            src={logo}
            alt="Furry Tag"
            width={230}
            height={40}
        />
    </div>
  )
}
