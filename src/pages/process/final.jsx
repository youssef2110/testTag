import withLayout from "components/layout/withLayout"
import Header2 from "components/Navigation/header2"
import styles from 'styles/ProcessStyles/Steps.module.scss'
import done from 'static/assets/done.png'
import arrow from 'static/assets/ArrowFinal.png'
import { Container } from '@blueupcode/components'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Final() {
    useEffect(function() {
        if (typeof window !== "undefined") {
            if(localStorage.getItem("petInfo")){
                setPetName(JSON.parse(localStorage.getItem("petInfo")).name);
            }
        }
    },[]);

  const [petName, setPetName] = useState('')

  return (
    <div className={styles.All2}>
      <Header2 />
      <div className={styles.InsideStep4}>
            <div className={styles.FinalContainer}>
                    <Container>
                        <div className={styles.FinalInformation}>
                            <Image src={done} height={100} width={100} alt="sucess" />
                            <h1 className={styles.TitleFinale}>Congratulation, your account is now open</h1>
                            <h3 className={styles.UnderTitleFinale}>What’s Next?</h3>
                            <div className={styles.buttons}>
                                <Link href="#"><a><span>Take a tour platform</span><Image src={arrow} height={25} width={30} alt="arrow" /></a></Link>
                                <Link href="#"><a><span>Add {petName}’s document</span><Image src={arrow} height={25} width={30} alt="arrow" /></a></Link>
                                <Link href="#"><a><span>Check out our veterinarian features</span><Image src={arrow} height={25} width={30} alt="arrow" /></a></Link>
                                <Link href="#"><a><span>Upload {petName}’s document</span><Image src={arrow} height={25} width={30} alt="arrow" /></a></Link>
                                <Link href="#"><a><span>Set {petName}’s reminders</span><Image src={arrow} height={25} width={30} alt="arrow" /></a></Link>
                                <Link href="#"><a><span>Start {petName}’s health journal</span><Image src={arrow} height={25} width={30} alt="arrow" /></a></Link>
                            </div>
                        </div>
                    </Container>
            <div className={styles.ContainerImage3}>
            </div>
        </div>
      </div>
    </div>
  )
}
  
export default withLayout(Final, "blankWithoutFloat")