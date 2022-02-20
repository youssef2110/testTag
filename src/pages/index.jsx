import withLayout from "components/layout/withLayout"
import Image from 'next/image'
import styles from 'styles/ProcessStyles/Home.module.scss'
import Link from 'next/link'
import logo from 'static/assets/LogoBlackText.png'
import facebook from 'static/assets/FacebookIcon.png'
import instagram from 'static/assets/InstagramIcon.png'
import pinterest from 'static/assets/PinterestIcon.png'
import tiktok from 'static/assets/TiktokIcon.png'
import { useEffect } from "react"

function Home() {
  useEffect(function() {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", 'light')
    }
  },[]);
  return (
    <div className={styles.Home}>
    <div className={styles.HomeBox}>
      <Image
        src={logo}
        alt="Furry Tag"
        width={200}
        height={40}
      />
      <p>Your Pet Safety Just got Smarter</p>
      <Link href="/process/step1">
        <a className={styles.Button}>GET STARTED</a>
      </Link>
      <span>Follow us on</span>
      <div className={styles.socialMedia}>
        <a href='#'>
          <Image
            src={facebook}
            alt="Furry Tag"
            width={12}
            height={15}
          />
        </a>
        <a href='#'>
          <Image
            src={instagram}
            alt="Furry Tag"
            width={15}
            height={15}
          />
        </a>
        <a href='#'>
          <Image
            src={pinterest}
            alt="Furry Tag"
            width={15}
            height={15}
          />
        </a>
        <a href='#'>
          <Image
            src={tiktok}
            alt="Furry Tag"
            width={15}
            height={15}
          />
        </a>
      </div>
    </div>
  </div>
  )
}

export default withLayout(Home, "blankWithoutFloat")