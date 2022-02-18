import React, { useEffect, useState } from 'react'
import { Container, Form, Label, Input } from '@blueupcode/components'
import styles from 'styles/ProcessStyles/Steps.module.scss'
import { ContainerOther, ButtonNext } from './FirstStepUi'
import { petBirthdayAction, petAgeAction } from 'store/actions/petInfoAction'
import { useDispatch } from 'react-redux'

export default function PetInfoThree({NextStep}) {

    const [petBIrthday, setPetBIrthday] = useState('')
    const [petAge, setPetAge] = useState('')
    const [petName, setPetName] = useState('')
    const dispatch = useDispatch();
    useEffect(function() {
        if (typeof window !== "undefined") {
            if(localStorage.getItem("petInfo")){
                setPetBIrthday(JSON.parse(localStorage.getItem("petInfo")).birthday);
                setPetAge(JSON.parse(localStorage.getItem("petInfo")).age);
                setPetName(JSON.parse(localStorage.getItem("petInfo")).name);
            }
        }
    },[]);
    const ValidatInfo = () => {
        dispatch(petBirthdayAction(petBIrthday));
        dispatch(petAgeAction(petAge));
        NextStep()
    }

  return (
      <>
        <div className={styles.BlankTitle}></div>
        <Container>
            <ContainerOther width='auto'>
                <Form.Group className={styles.FormSimple}>
                    <Label for="PetBirth">Birthday or Gotcha day (MM/DD/YYYY) (if know)</Label>
                    <Input onChange={(e) => setPetBIrthday(e.target.value)} value={petBIrthday} className={petBIrthday ? styles.inputUpdated : ''} type="text" size="lg" id="PetBirth" placeholder="Birthday or Gotcha day " />
                </Form.Group>
                <Form.Group className={styles.FormSimple}>
                    <Label for="PetAge">{petName+"'s Age (if know)"}</Label>
                    <Input onChange={(e) => setPetAge(e.target.value)} value={petAge} className={petAge ? styles.inputUpdated : ''} type="number" size="lg" id="PetAge" placeholder="Your Pet’s Age" />
                </Form.Group>         
                <ButtonNext onClick={() => ValidatInfo()}>
                    Next
                </ButtonNext>
            </ContainerOther>
        </Container>
    </>
)
}
