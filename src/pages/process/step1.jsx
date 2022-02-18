import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import withLayout from "components/layout/withLayout"
import ProgressBar from "components/progressBar/progressBar"
import Header from "components/Navigation/header"
import Footer from "components/Navigation/Footer"
import FakeFooter from "components/Navigation/FakeFooter"
import styles from 'styles/ProcessStyles/Steps.module.scss'
import PetChoice from "components/FirstStep/petChoice"
import GenderChoice from "components/FirstStep/genderChoice"
import NameChoice from "components/FirstStep/nameStep"
import PetInfoOne from "components/FirstStep/petInfoOne"
import PetInfoTwo from "components/FirstStep/petInfoTwo"
import PetInfoThree from "components/FirstStep/petInfoThree"
import ImageStep from "components/FirstStep/imageStep"
import { ValuesStep1 } from "components/Navigation/PourcentageSteps" 

function StepOne() {
  const router = useRouter()
  useEffect(function() {
    if (typeof window !== "undefined") {

      localStorage.setItem("theme", 'light')

      if(localStorage.getItem("pourcentage")){
        if(0 < parseInt(localStorage.getItem("valueStep")) && parseInt(localStorage.getItem("valueStep")) < 8){
          setPourcentage(parseInt(localStorage.getItem("pourcentage")));
        }else{
          setPourcentage(ValuesStep1[6])
          localStorage.setItem("pourcentage", ValuesStep1[6])
        }
      }else{
        localStorage.setItem("pourcentage", 0)
      }

      if(localStorage.getItem("valueStep")){
        if(0 < parseInt(localStorage.getItem("valueStep")) && parseInt(localStorage.getItem("valueStep")) < 8){
          setUnderStep(parseInt(localStorage.getItem("valueStep")));
        }else{
          setUnderStep(7)
          localStorage.setItem("valueStep", 7)
        }
      }else{
        localStorage.setItem("valueStep", 1)
      }

      if(!localStorage.getItem("petInfo")){
        localStorage.setItem("petInfo", JSON.stringify({
          type : '',
          typeOther : '',
          name : '',
          gender : '',
          breed : '',
          color : '',
          spray : false,
          allergies : [''],
          conditions : [''],
          birthday :'',
          age :'',
          picture : '',
          picturePreview : '',
        }))
      }
    }
  },[]);
  
  const [pourcentage, setPourcentage] = useState(parseInt(0))
  const [underStep, setUnderStep] = useState(1)

  const NextStep = () => {
    localStorage.setItem("pourcentage", ValuesStep1[underStep])
    localStorage.setItem("valueStep", underStep+1)
    if(underStep === 7){
      router.push('/process/step2')
    }else{
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
  const SkipStep = () => {
    localStorage.setItem("pourcentage", ValuesStep1[underStep])
    localStorage.setItem("valueStep", underStep+1)
    if(underStep === 7){
      router.push('/process/step2')
    }else{
      setUnderStep(underStep+1)
      setPourcentage(ValuesStep1[underStep])
    }
  }

  return (
    <div className={styles.All}>
      <Header />
      <ProgressBar step={1} pourcentage={pourcentage} />
      <div className={styles.InsideStep}>
        {
          underStep === 1 && <PetChoice NextStep={NextStep} />
        }
        {
          underStep === 2 && <NameChoice NextStep={NextStep} />
        }
        {
          underStep === 3 && <GenderChoice NextStep={NextStep} />
        }
        {
          underStep === 4 && <PetInfoOne NextStep={NextStep} />
        }
        {
          underStep === 5 && <PetInfoTwo NextStep={NextStep} />
        }
        {
          underStep === 6 && <PetInfoThree NextStep={NextStep} />
        }
        {
          underStep === 7 && <ImageStep NextStep={NextStep} />
        }
      </div>
      {
        underStep === 1 
        ?
        ''
        :
        <> 
          <FakeFooter />
          <Footer underStep={underStep} PreviousStep={PreviousStep} SkipStep={SkipStep} />
        </>
      }
    </div>
  )
}
  
export default withLayout(StepOne, "blankWithoutFloat")