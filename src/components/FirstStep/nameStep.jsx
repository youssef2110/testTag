import React, { useEffect, useState } from 'react'
import {Container, Form, Label, Input } from '@blueupcode/components'
import { ContainerOther } from './FirstStepUi'
import styles from 'styles/ProcessStyles/Steps.module.scss'
import { ButtonNext } from './FirstStepUi'
import { petNameAction } from 'store/actions/petInfoAction'
import { useDispatch } from 'react-redux'

export default function NameChoice({NextStep}) {
    const [petName, setPetName] = useState('')
    const dispatch = useDispatch();
    useEffect(function() {
        if (typeof window !== "undefined") {
            if(localStorage.getItem("petInfo")){
                setPetName(JSON.parse(localStorage.getItem("petInfo")).name);
            }
        }
    },[]);
    const ValidatInfo = () => {
        dispatch(petNameAction(petName));
        NextStep()
    }
  return (
      <>
        <div className={styles.BlankTitle}></div>
        <Container>
            <ContainerOther width='auto'>
                <Form.Group className={styles.FormSimple}>
                    <Label for="PetName">Pet Name</Label>
                    <Input onChange={(e) => setPetName(e.target.value)} value={petName} className={petName ? styles.inputUpdated : ''} type="text" size="lg" id="PetName" placeholder="Pet Name" />
                </Form.Group>
                <ButtonNext onClick={() => ValidatInfo()}>
                    Next
                </ButtonNext>
            </ContainerOther>
        </Container>
    </>
)
}
