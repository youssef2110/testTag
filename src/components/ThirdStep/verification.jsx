import React, { useState } from 'react'
import { Form, Label, Input, Container } from '@blueupcode/components'
import { ContainerOther, ButtonNext } from './ThirdStepUi'
import styles from 'styles/ProcessStyles/Steps.module.scss'
import Link from 'next/link'

export default function Verification({Valider}) {

  const [confiramation, setConfiramation] = useState('')

  const validation = () => {
      if(confiramation === '1000'){
        Valider()
      }
}
  
  return (
    <div className={styles.SignupContainer2}>
            <Container>
                <ContainerOther active={true}>
                    <h1 className={styles.TitleStep2}>We sent your code to johndoe@gmail.com</h1>
                    <h3 className={styles.UnderTitleStep2}>Did not receive code?  <Link href='/login'>Click here</Link></h3>
                    <Form.Group className={styles.FormSimple4}>
                        <Label for="email">Enter code</Label>
                        <Input onChange={(e) => setConfiramation(e.target.value)} value={confiramation} className={confiramation ? styles.inputUpdated : ''} type="text" size="lg" id="confiramation" placeholder="Enter code" />
                    </Form.Group>
                    <ButtonNext active={true} onClick={() => validation('dv')}>
                        Continuer
                    </ButtonNext>
                </ContainerOther>
            </Container>
        <div className={styles.ContainerImage2}>
        </div>
    </div>
  )
}
