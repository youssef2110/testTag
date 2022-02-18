import React, { useEffect, useState } from 'react'
import { PetCard } from './FirstStepUi'
import female from 'static/assets/Female.png'
import male from 'static/assets/Male.png'
import other from 'static/assets/OtherGender.png'
import Image from 'next/image'
import { ImagePet } from './FirstStepUi'
import { Row, Col, Container } from '@blueupcode/components'
import { ContainerOther } from './FirstStepUi'
import styles from 'styles/ProcessStyles/Steps.module.scss'
import { petGenderAction } from 'store/actions/petInfoAction'
import { useDispatch } from "react-redux";

export default function GenderChoice({NextStep}) {
    useEffect(function() {
        if (typeof window !== "undefined") {
            if(localStorage.getItem("petInfo")){
                setGetChoice(JSON.parse(localStorage.getItem("petInfo")).gender);
            }
        }
    },[]);

    const [genderChoice, setGetChoice] = useState('')
    const dispatch = useDispatch();
    const ValidatInfo = (type) => {
        setGetChoice(type)
        dispatch(petGenderAction(type));
        NextStep()
    }

    return (
        <>
            <div className={styles.BlankTitle2}></div>
            <Container>
                <Row>
                    <Col lg="4">
                        <PetCard colorBorder={genderChoice === 'male' ? '#608FF5' : '#F1F4F4'} onClick={() => ValidatInfo('male')}>
                            <ImagePet>
                                <Image
                                    src={male}
                                    alt="Male"
                                />
                            </ImagePet>
                            <p>Male</p>
                        </PetCard>
                    </Col>
                    <Col lg="4">
                        <PetCard colorBorder={genderChoice === 'female' ? '#608FF5' : '#F1F4F4'} onClick={() => ValidatInfo('female')}>
                            <ImagePet>
                                <Image
                                    src={female}
                                    alt="Female"
                                />
                            </ImagePet>
                            <p>Female</p>
                        </PetCard>
                    </Col>
                    <Col lg="4">
                        <ContainerOther>
                            <PetCard colorBorder={genderChoice === 'other' ? '#608FF5' : '#F1F4F4'} onClick={() => ValidatInfo('other')}>
                                <ImagePet>
                                    <Image
                                        src={other}
                                        alt="Other"
                                    />
                                </ImagePet>
                                <p>Other</p>
                            </PetCard>
                        </ContainerOther>
                    </Col>
                </Row>
            </Container>
        </>
)
}
