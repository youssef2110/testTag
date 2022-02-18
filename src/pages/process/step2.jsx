import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import withLayout from "components/layout/withLayout"
import ProgressBar from "components/progressBar/progressBar"
import Header from "components/Navigation/header"
import Footer from "components/Navigation/footer"
import FakeFooter from "components/Navigation/FakeFooter"
import UserInfo from "components/SecondStep/userInfo"
import styles from 'styles/ProcessStyles/Steps.module.scss'
import VetInfo from "components/SecondStep/vetInfo"
import VideoInfo from "components/SecondStep/VideoInfo"
import { ValuesStep1 } from "components/Navigation/PourcentageSteps" 


function StepTwo() {
  const router = useRouter()
  useEffect(function() {
    if (typeof window !== "undefined") {

      if(localStorage.getItem("pourcentage")){
        if(7 < parseInt(localStorage.getItem("valueStep")) && parseInt(localStorage.getItem("valueStep")) < 11){
          setPourcentage(parseInt(localStorage.getItem("pourcentage")));
        }else{
          setPourcentage(ValuesStep1[9])
          localStorage.setItem("pourcentage", ValuesStep1[9])
        }
      }else{
        localStorage.setItem("pourcentage", 0)
      }

      if(localStorage.getItem("valueStep")){
        if(7 < parseInt(localStorage.getItem("valueStep")) && parseInt(localStorage.getItem("valueStep")) < 11){
          setUnderStep(parseInt(localStorage.getItem("valueStep")));
        }else{
          setUnderStep(10)
          localStorage.setItem("valueStep", 10)
        }
      }else{
        localStorage.setItem("valueStep", 1)
      }

      if(!localStorage.getItem("generalInfo")){
        localStorage.setItem("generalInfo", JSON.stringify({
          veterinarian : {name : '', doctor : '' , adresse : '', city : '' , phoneStart: '', phone : '', zipCode : ''},
          contact : [{first_name : '', last_name : '' ,phoneStart: '', phone : '', email : '' , method : []}],
        }))
      }
    }
  },[]);
  
  const [pourcentage, setPourcentage] = useState(parseInt(27))
  const [underStep, setUnderStep] = useState(8)

  const NextStep = () => {
    if(underStep === 10){
      router.push('/process/step3')
    }else{
      localStorage.setItem("pourcentage", ValuesStep1[underStep])
      localStorage.setItem("valueStep", underStep+1)
      setUnderStep(underStep+1)
      setPourcentage(ValuesStep1[underStep])
    }
  }
  const PreviousStep = () => {
    localStorage.setItem("pourcentage", ValuesStep1[underStep-2])
    localStorage.setItem("valueStep", underStep-1)
    if(underStep === 8){
      router.push('/process/step1')
    }else{
      setPourcentage(ValuesStep1[underStep-2])
      setUnderStep(underStep-1)
    }
  }
  const SkipStep = () => {
    if(underStep === 10){
      router.push('/process/step3')
    }else{
      localStorage.setItem("pourcentage", ValuesStep1[underStep])
      localStorage.setItem("valueStep", underStep+1)
      setUnderStep(underStep+1)
      setPourcentage(ValuesStep1[underStep])
    }
  }
  return (
    <div className={styles.All}>
      <Header />
      <ProgressBar step={2} pourcentage={pourcentage} />
      <div className={styles.InsideStep}>
        {
          underStep === 8 && <UserInfo NextStep={NextStep} />
        }
        {
          underStep === 9 && <VetInfo NextStep={NextStep} />
        }
        {
          underStep === 10 && <VideoInfo NextStep={NextStep} />
        }
      </div>
      <FakeFooter />
      <Footer underStep={underStep} PreviousStep={PreviousStep} SkipStep={SkipStep} />
    </div>
  )
}

export default withLayout(StepTwo, "blankWithoutFloat")