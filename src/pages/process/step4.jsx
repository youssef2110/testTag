
import React, { useEffect, useState } from "react";
import withLayout from "components/layout/withLayout"
import ProgressBar from "components/progressBar/progressBar"
import Header from "components/Navigation/header";
import styles from 'styles/ProcessStyles/Steps.module.scss'
import { ValuesStep1 } from "components/Navigation/PourcentageSteps" 
import Footer2 from "components/Navigation/Footer2";
import Footer from "components/Navigation/Footer"
import FakeFooter from "components/Navigation/FakeFooter";
import TagsInfo from "components/FourthStep/tagsInfo";
import TagsActivate from "components/FourthStep/tagsActivate";
import { useRouter } from 'next/router'

function StepThree() {
  const router = useRouter()
  useEffect(function() {
    if (typeof window !== "undefined") {

      localStorage.setItem("theme", 'light')

      if(localStorage.getItem("pourcentage")){
        if(11 < parseInt(localStorage.getItem("valueStep")) && parseInt(localStorage.getItem("valueStep")) < 14){
          setPourcentage(parseInt(localStorage.getItem("pourcentage")));
        }else{
          setPourcentage(ValuesStep1[11])
          localStorage.setItem("pourcentage", ValuesStep1[11])
        }
      }else{
        localStorage.setItem("pourcentage", 0)
      }

      if(localStorage.getItem("valueStep")){
        if(11 < parseInt(localStorage.getItem("valueStep")) && parseInt(localStorage.getItem("valueStep")) < 14){
          setUnderStep(parseInt(localStorage.getItem("valueStep")));
        }else{
          setUnderStep(12)
          localStorage.setItem("valueStep", 12)
        }
      }else{
        localStorage.setItem("valueStep", 1)
      }

    }
  },[]);

  const [pourcentage, setPourcentage] = useState(parseInt(60))
  const [underStep, setUnderStep] = useState(12)

  const NextStep = () => {
    if(underStep === 13){
      router.push('/process/final')
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
    setPourcentage(ValuesStep1[underStep-2])
    setUnderStep(underStep-1)
  }

  return (
    <div className={styles.All}>
      <Header />
      <ProgressBar step={4} pourcentage={pourcentage} />
      <div className={styles.InsideStep}>
        {
          underStep === 12 && <TagsInfo NextStep={NextStep} />
        }
        {
          underStep === 13 && <TagsActivate NextStep={NextStep} />
        }
      </div>
      <FakeFooter />
      {underStep === 12 ? <Footer2 /> :  <Footer PreviousStep={PreviousStep} NoNext={true} />}
    </div>
  )
}
  
export default withLayout(StepThree, "blankWithoutFloat")