import React from 'react'
import { Container } from '@blueupcode/components'
import { ContainerOther } from './SecondStepUi'
import styles from 'styles/ProcessStyles/Steps.module.scss'
import { ButtonNext } from './SecondStepUi'


export default function VideoInfo({NextStep}) {

    const ValidatInfo = () => {
        NextStep()
    }
    

  return (
      <>
        <div className={styles.BlankTitle}></div>
        <Container>
            <div className={styles.VideoContainer}>
                <iframe></iframe>
            </div>
            <ContainerOther width='auto'>
                <ButtonNext onClick={() => ValidatInfo()}>
                    Next
                </ButtonNext>
            </ContainerOther>
        </Container>
    </>
)
}
