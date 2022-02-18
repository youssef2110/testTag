import React, { useEffect, useState } from 'react'
import { PetCard } from './FirstStepUi'
import cat from 'static/assets/Cat.png'
import dog from 'static/assets/Dog.png'
import other from 'static/assets/Other.png'
import Image from 'next/image'
import { ImagePet, ContainerOther,ButtonNext } from './FirstStepUi'
import { Row, Col, Container, Form, Label, Input } from '@blueupcode/components'
import styles from 'styles/ProcessStyles/Steps.module.scss'
import { petTypeAction, petTypeOtherAction } from 'store/actions/petInfoAction'
import { useDispatch } from "react-redux";

export default function PetChoice({NextStep}) {
        
    useEffect(function() {
        if (typeof window !== "undefined") {
            if(localStorage.getItem("petInfo")){
                setPetChoice(JSON.parse(localStorage.getItem("petInfo")).type);
                setOtherName(JSON.parse(localStorage.getItem("petInfo")).typeOther);
            }
        }
    },[]);
  const [petChoice, setPetChoice] = useState('')
  const [otherName, setOtherName] = useState('')
  const dispatch = useDispatch();

  const ValidatInfo = () => {
    dispatch(petTypeAction(petChoice));
    if(petChoice === 'other'){
        dispatch(petTypeOtherAction(otherName));
    }else{
        dispatch(petTypeOtherAction(''));
    }
    NextStep()
  }
  const SendInfo = (type) => {
    setPetChoice(type)
    dispatch(petTypeAction(type));
    NextStep()
  }
  return (
      <>
        <h1 className={styles.TitleStep}>Pet Type</h1>
        <Container>
            <Row>
                <Col lg="4">
                    <PetCard colorBorder={petChoice === 'dog' ? '#608FF5' : '#F1F4F4'} onClick={() => SendInfo('dog')}>
                        <ImagePet>
                            <Image
                                src={dog}
                                alt="Dog"
                            />
                        </ImagePet>
                        <p>Dog</p>
                    </PetCard>
                </Col>
                <Col lg="4">
                    <PetCard colorBorder={petChoice === 'cat' ? '#608FF5' : '#F1F4F4'} onClick={() => SendInfo('cat')}>
                        <ImagePet>
                            <Image
                                src={cat}
                                alt="Cat"
                            />
                        </ImagePet>
                        <p>Cat</p>
                    </PetCard>
                </Col>
                <Col lg="4">
                    <ContainerOther>
                        <PetCard colorBorder={petChoice === 'other' ? '#608FF5' : '#F1F4F4'} onClick={() => setPetChoice('other')}>
                            <ImagePet>
                                <Image
                                    src={other}
                                    alt="Other"
                                />
                            </ImagePet>
                            <p>Other</p>
                        </PetCard>
                        {petChoice === 'other' && <Form.Group className={styles.FormUpdate}>
                            <Label for="PetType">Pet Type</Label>
                            <Input onChange={(e) => setOtherName(e.target.value)} value={otherName} className={otherName ? styles.inputUpdated : ''} type="text" size="lg" id="PetType" placeholder="Pet Type" />
                        </Form.Group>}
                    </ContainerOther>
                </Col>
            </Row>
            {petChoice === 'other' ? <ContainerOther width='auto'>
                <ButtonNext onClick={() => ValidatInfo()}>
                    Next
                </ButtonNext>
            </ContainerOther> : ''}
        </Container>
    </>
)
}
