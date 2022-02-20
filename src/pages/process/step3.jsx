import React, { useEffect, useState } from "react";
import withLayout from "components/layout/withLayout"
import ProgressBar from "components/progressBar/progressBar"
import Header from "components/Navigation/header";
import styles from 'styles/ProcessStyles/Steps.module.scss'
import { ValuesStep1 } from "components/Navigation/PourcentageSteps" 
import SignUp from "components/ThirdStep/signUp";
import Verification from "components/ThirdStep/verification";
import { useRouter } from 'next/router'

function StepFour() {
  const router = useRouter()
  useEffect(function() {
    if (typeof window !== "undefined") {

      localStorage.setItem("theme", 'light')

      if(localStorage.getItem("pourcentage")){
        if(10 < parseInt(localStorage.getItem("valueStep")) && parseInt(localStorage.getItem("valueStep")) < 12){
          setPourcentage(parseInt(localStorage.getItem("pourcentage")));
        }else{
          setPourcentage(ValuesStep1[10])
          localStorage.setItem("pourcentage", ValuesStep1[10])
        }
      }else{
        localStorage.setItem("pourcentage", 0)
      }

      if(localStorage.getItem("valueStep")){
        if(10 < parseInt(localStorage.getItem("valueStep")) && parseInt(localStorage.getItem("valueStep")) < 12){
          setUnderStep(parseInt(localStorage.getItem("valueStep")));
        }else{
          setUnderStep(11)
          localStorage.setItem("valueStep", 11)
        }
      }else{
        localStorage.setItem("valueStep", 1)
      }
    }
  },[]);

  const [pourcentage, setPourcentage] = useState(parseInt(40))
  const [underStep, setUnderStep] = useState(8)
  const [verification, setVerification] = useState(false)

  const Continuer = () => {
    setVerification(true)
  }

  const Valider = () => {
    localStorage.setItem("pourcentage", ValuesStep1[underStep])
    localStorage.setItem("valueStep", underStep+1)
    router.push('/process/step4')
  }

  return (
    <div className={styles.All2}>
      <Header />
      {verification ? <React.Fragment>
        <div className={styles.InsideStep3}>
          <Verification Valider={Valider} />
        </div>
      </React.Fragment> :
      <React.Fragment>
        <ProgressBar step={3} pourcentage={pourcentage} />
        <div className={styles.InsideStep2}>
          <SignUp Continuer={Continuer} Valider={Valider} />
        </div>
      </React.Fragment>
      }
    </div>
  )
}

export default withLayout(StepFour, "blankWithoutFloat")