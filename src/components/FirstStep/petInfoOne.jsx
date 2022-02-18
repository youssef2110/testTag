import React, { useEffect, useState } from 'react'
import { Container, Form, Label, Input } from '@blueupcode/components'
import { ContainerOther } from './FirstStepUi'
import styles from 'styles/ProcessStyles/Steps.module.scss'
import { ButtonNext } from './FirstStepUi'
import { petBreedAction,petColorAction,petSprayAction } from 'store/actions/petInfoAction'
import { useDispatch } from 'react-redux'
const Listbreed = require('./ListBreed.json')

export default function PetInfoOne({NextStep}) {

  const [petBreed, setPetBreed] = useState('')
  const [petColor, setPetColor] = useState('')
  const [petName, setPetName] = useState('')
  const [petType, setPetType] = useState('')
  const [petSpray, setPetSpray] = useState(false)
  const dispatch = useDispatch();
  useEffect(function() {
    if (typeof window !== "undefined") {
        if(localStorage.getItem("petInfo")){
            setPetBreed(JSON.parse(localStorage.getItem("petInfo")).breed);
            setPetColor(JSON.parse(localStorage.getItem("petInfo")).color);
            setPetSpray(JSON.parse(localStorage.getItem("petInfo")).spray);
            setPetName(JSON.parse(localStorage.getItem("petInfo")).name);
            setPetType(JSON.parse(localStorage.getItem("petInfo")).type);
        }
    }
  },[]);
  const ValidatInfo = () => {
    if(petType === 'dog'){
        dispatch(petBreedAction(petBreed))
    }else{
        dispatch(petBreedAction(''))
    }
    dispatch(petColorAction(petColor));
    dispatch(petSprayAction(petSpray));
    NextStep()
    }

  return (
      <>
        <div className={styles.BlankTitle}></div>
        <Container>
            <ContainerOther width='auto'>
                {petType === 'dog' ? <Form.Group className={styles.FormSimple}>
                    <Label for="Breed">{petName+"'s Breed"}</Label>
                    <Input onChange={(e) => setPetBreed(e.target.value)} value={petBreed} className={petBreed ? styles.inputUpdated : ''} type="select" size="lg" id="Breed" placeholder="Select Breed">
                        <option value={''}>Select Breed</option>
                        {Listbreed.Breed.map((element,key) => {
                            return (
                                <option key={key} value={element}>{element}</option>
                            )
                        })}
                    </Input>
                </Form.Group> : ''}
                <Form.Group className={styles.FormSimple}>
                    <Label for="Color">{petName+"'s Color"}</Label>
                    <Input onChange={(e) => setPetColor(e.target.value)} value={petColor} className={petColor ? styles.inputUpdated : ''} type="text" size="lg" id="Color" placeholder="Color" />
                </Form.Group>
                <div className={styles.CheckBox}>
                    <Label>Spay / Neuter</Label>
                    <Form.Group className={styles.FormCheck} check inline>
                        <Input
                            type="checkbox"
                            id="yes"
                            onChange={() => {setPetSpray(true)}}
                            checked={petSpray}
                        />
                        <Label className={!petSpray ? styles.ColorGrey : ''} check for="yes">
                            Yes
                        </Label>
                    </Form.Group>
                    <Form.Group className={styles.FormCheck} check inline>
                        <Input
                            type="checkbox"
                            id="no"
                            onChange={() => { setPetSpray(false)}}
                            checked={!petSpray}
                        />
                        <Label className={petSpray ? styles.ColorGrey : ''} check for="no">
                            No
                        </Label>
                    </Form.Group>
                </div>
                <ButtonNext onClick={() => ValidatInfo()}>
                    Next
                </ButtonNext>
            </ContainerOther>
        </Container>
    </>
)
}
