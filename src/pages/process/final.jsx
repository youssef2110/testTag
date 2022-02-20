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

    localStorage.setItem("theme", 'light')
    
    if (typeof window !== "undefined") {
        if(localStorage.getItem("petInfo")){
          setPetInfo(JSON.parse(localStorage.getItem("petInfo")));
          setGeneralInfo(JSON.parse(localStorage.getItem("generalInfo")));
        }
    }
  },[]);

  const [petInfo, setPetInfo] = useState({})
  const [generalInfo, setGeneralInfo] = useState({})

  return (
    <div className={styles.All2}>
      <Header2 />
      <div className={styles.InsideStep4}>
            <div className={styles.FinalContainer}>
                    <Container>
                        <div className={styles.FinalInformation}>
                            <Image src={done} height={80} width={80} alt="sucess" />
                            <h1 className={styles.TitleFinale}>Congratulation, your account is now open</h1>
                            <h3 className={styles.UnderTitleFinale}>{"What’s Next?"}</h3>
                            <div className={styles.buttons}>
                                <Link href="#"><a><span>Take a tour platform</span><Image src={arrow} height={25} width={30} alt="arrow" /></a></Link>
                                <Link href="#"><a><span>{"Add "+petInfo.name+"’s document"}</span><Image src={arrow} height={25} width={30} alt="arrow" /></a></Link>
                                <Link href="#"><a><span>Check out our veterinarian features</span><Image src={arrow} height={25} width={30} alt="arrow" /></a></Link>
                                <Link href="#"><a><span>{"Upload "+petInfo.name+"’s document"}</span><Image src={arrow} height={25} width={30} alt="arrow" /></a></Link>
                                <Link href="#"><a><span>{"Set "+petInfo.name+"’s reminders"}</span><Image src={arrow} height={25} width={30} alt="arrow" /></a></Link>
                                <Link href="#"><a><span>{"Start "+petInfo.name+"’s health journal"}</span><Image src={arrow} height={25} width={30} alt="arrow" /></a></Link>
                            </div>
                        </div>
                    </Container>
            <div className={styles.ContainerImage3}>
              <p className={styles.PetName}>{petInfo.name}</p>
              <p className={styles.Dob}>{petInfo.birthday}</p>
              <p className={styles.Age}>{petInfo.age} Year</p>
              <p className={styles.Breed}>{petInfo.breed ? petInfo.breed : '-'}</p>
              <p className={styles.Sex}>{petInfo.gender}</p>
              <p className={styles.Activation}>{generalInfo.activation}</p>
              <p className={styles.Spay}>{petInfo.spray ? 'Yes' : 'No'}</p>
              <div className={styles.PhoneButtons}>
                <Link href="a">My contact</Link>
                <Link href="b">Lindsey</Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
  
export default withLayout(Final, "blankWithoutFloat")