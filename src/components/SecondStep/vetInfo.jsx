import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Form, Label, Input } from '@blueupcode/components'
import styles from 'styles/ProcessStyles/Steps.module.scss'
import { ContainerOther, ButtonNext } from './SecondStepUi'
import { useDispatch } from 'react-redux'
import { VetInfoAction } from 'store/actions/generalInfo'

export default function VetInfo({NextStep}) {

  const [vetInfo, setVetInfo] = useState({name : '', doctor : '' , adresse : '', city : '' , phoneStart: '', phone : '', zipCode : ''})
  const dispatch = useDispatch();
  useEffect(function() {
    if (typeof window !== "undefined") {
        if(localStorage.getItem("generalInfo")){
            setVetInfo(JSON.parse(localStorage.getItem("generalInfo")).veterinarian);
        }
    }
  },[]);
  const ValidatInfo = () => {
    dispatch(VetInfoAction(vetInfo));
    NextStep()
    }

  const onChangeVet = (text,key) => {
    const newArr = {...vetInfo};
    newArr[key] = text;
    setVetInfo(newArr)
  }

  return (
      <>
        <h1 className={styles.TitleStep}>{"Veterinarian's Contact"}</h1>
        <Container>
            <ContainerOther width='auto'>
                <Form className={styles.FormComplexe}>
                    <Row form className={styles.FormDiv}>
                        <Col lg="6">
                            {/* BEGIN Form Group */}
                            <Form.Group className={styles.FormSimple2}>
                            <Label for="name">Hospital Name</Label>
                            <Input
                                type="text"
                                id="name"
                                value={vetInfo.name}
                                onChange={(e) => onChangeVet(e.target.value,'name')}
                                placeholder="Hospital Name"
                            />
                            </Form.Group>
                            {/* BEGIN Form Group */}
                        </Col>
                        <Col lg="6">
                            {/* BEGIN Form Group */}
                            <Form.Group className={styles.FormSimple2}>
                            <Label for="doctor">Treated by Dr.</Label>
                            <Input
                                type="text"
                                id="doctor"
                                value={vetInfo.doctor}
                                onChange={(e) => onChangeVet(e.target.value,'doctor')}
                                placeholder="Treated by Dr."
                            />
                            </Form.Group>
                            {/* BEGIN Form Group */}
                        </Col>
                        <Col lg="6">
                            {/* BEGIN Form Group */}
                            <Form.Group className={styles.FormSimple2}>
                            <Label for="Address">Address</Label>
                            <Input
                                type="text"
                                id="Address"
                                value={vetInfo.adresse}
                                onChange={(e) => onChangeVet(e.target.value,'adresse')}
                                placeholder="Address"
                            />
                            </Form.Group>
                            {/* BEGIN Form Group */}
                        </Col>
                        <Col lg="6">
                            {/* BEGIN Form Group */}
                            <Form.Group className={styles.FormSimple2}>
                            <Label for="City">City</Label>
                            <Input
                                type="text"
                                id="City"
                                value={vetInfo.city}
                                onChange={(e) => onChangeVet(e.target.value,'city')}
                                placeholder="City"
                            />
                            </Form.Group>
                            {/* BEGIN Form Group */}
                        </Col>
                        <Col lg="6">
                            {/* BEGIN Form Group */}
                            <Form.Group className={styles.FormSimple2}>
                            <Label for="zipCode">Zip/Postal Code</Label>
                            <Input
                                type="number"
                                id="zipCode"
                                value={vetInfo.zipCode}
                                onChange={(e) => onChangeVet(e.target.value,'zipCode')}
                                placeholder="Zip/Postal Code"
                            />
                            </Form.Group>
                            {/* BEGIN Form Group */}
                        </Col>
                        <Col lg="6">
                            {/* BEGIN Form Group */}
                            <Form.Group className={styles.FormSimple2}>
                            <Label for="PhoneNumber">Phone Number</Label>
                            <div className={styles.PhoneInput}>
                                <Input
                                    type="text"
                                    id="PhoneNumber"
                                    value={vetInfo.phoneStart}
                                    onChange={(e) => onChangeVet(e.target.value,'phoneStart')}
                                    placeholder="+91"
                                />
                                <Input
                                    type="text"
                                    id="PhoneNumber"
                                    value={vetInfo.phone}
                                    onChange={(e) => onChangeVet(e.target.value,'phone')}
                                    placeholder="Phone Number"
                                />
                            </div>
                            </Form.Group>
                            {/* BEGIN Form Group */}
                        </Col>
                    </Row>
                </Form>
                <ButtonNext onClick={() => ValidatInfo()}>
                    Next
                </ButtonNext>
            </ContainerOther>
        </Container>
    </>
)
}
