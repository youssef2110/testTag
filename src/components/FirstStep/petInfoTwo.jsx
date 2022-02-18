import React, { useEffect, useState } from 'react'
import { Container, Form, Label, Input } from '@blueupcode/components'
import styles from 'styles/ProcessStyles/Steps.module.scss'
import { ContainerOther, ButtonNext,ButtonAdd } from './FirstStepUi'
import { ButtonDelete } from './FirstStepUi'
import { petAllergiesAction,petConditionsAction } from 'store/actions/petInfoAction'
import { useDispatch } from 'react-redux'

export default function PetInfoTwo({NextStep}) {

  const [petAllergies, setPetAllergies] = useState([''])
  const [petConditions, setPetConditions] = useState([''])
  const [petName, setPetName] = useState('')
  const dispatch = useDispatch();
  useEffect(function() {
    if (typeof window !== "undefined") {
        if(localStorage.getItem("petInfo")){
            setPetAllergies(JSON.parse(localStorage.getItem("petInfo")).allergies);
            setPetConditions(JSON.parse(localStorage.getItem("petInfo")).conditions);
            setPetName(JSON.parse(localStorage.getItem("petInfo")).name);
        }
    }
  },[]);
  const ValidatInfo = () => {
    dispatch(petAllergiesAction(petAllergies));
    dispatch(petConditionsAction(petConditions));
    NextStep()
    }

  const onChangeAllergie = (text,key) => {
    const newArr = [...petAllergies];
    newArr[key] = text;
    setPetAllergies(newArr)
  }
  const addAllergie = () => {
    var newArr = [...petAllergies];
    newArr.push('');
    setPetAllergies(newArr)
  }
  const removeAllergie = (key) => {
    var newArr = [...petAllergies];
    newArr = newArr.filter((element,index) => index !== key);
    setPetAllergies(newArr)
  }
  const onChangeCondition = (text,key) => {
    const newArr = [...petConditions];
    newArr[key] = text;
    setPetConditions(newArr)
  }
  const addCondition = () => {
    var newArr = [...petConditions];
    newArr.push('');
    setPetConditions(newArr)
  }
  const removeCondition = (key) => {
    var newArr = [...petConditions];
    newArr = newArr.filter((element,index) => index !== key);
    setPetConditions(newArr)
  }
  return (
      <>
        <div className={styles.BlankTitle}></div>
        <Container>
            <ContainerOther width='auto'>
                <Form.Group className={styles.FormSimple}>
                    <Label for="PetAllergies">{petName+"'s Allergies"}</Label>
                    {petAllergies.map( (allergie,key) => {
                        return (
                            <div key={key} className={styles.FormContainer}>
                                <Input onChange={(e) => onChangeAllergie(e.target.value,key)} value={allergie} className={allergie ? styles.inputUpdated : ''} type="text" size="lg" placeholder="Allergie" />
                                {
                                    key === 0 
                                    ? 
                                        petAllergies.length === 1 
                                        ?
                                        <>
                                            <ButtonAdd type="mobile" onClick={() => addAllergie()}>
                                                + Add
                                            </ButtonAdd>
                                            <ButtonAdd type="desktop" onClick={() => addAllergie()}>
                                                + Add
                                            </ButtonAdd>
                                        </>
                                        :
                                        <ButtonAdd type="desktop" onClick={() => addAllergie()}>
                                            + Add
                                        </ButtonAdd>
                                    :
                                        petAllergies.length === key + 1 
                                        ? 
                                            <>
                                                <ButtonDelete onClick={() => removeAllergie(key)}>
                                                    Remove
                                                </ButtonDelete>
                                                <ButtonAdd type="mobile" onClick={() => addAllergie()}>
                                                    + Add
                                                </ButtonAdd>
                                            </>
                                        :
                                            <ButtonDelete onClick={() => removeAllergie(key)}>
                                                Remove
                                            </ButtonDelete>
                                }
                            </div>
                        )
                    })}
                </Form.Group>
                <Form.Group className={styles.FormSimple}>
                    <Label for="PetConditions">{petName+"'s Conditions"}</Label>
                    {petConditions.map( (condition,key) => {
                        return (
                            <div key={key} className={styles.FormContainer}>
                                <Input onChange={(e) => onChangeCondition(e.target.value,key)} value={condition} className={condition ? styles.inputUpdated : ''} type="text" size="lg" placeholder="Condition" />
                                {
                                    key === 0 
                                    ? 
                                        petConditions.length === 1 
                                        ?
                                        <>
                                            <ButtonAdd type="mobile" onClick={() => addCondition()}>
                                                + Add
                                            </ButtonAdd>
                                            <ButtonAdd type="desktop" onClick={() => addCondition()}>
                                                + Add
                                            </ButtonAdd>
                                        </>
                                        :
                                        <ButtonAdd type="desktop" onClick={() => addCondition()}>
                                            + Add
                                        </ButtonAdd>
                                    :
                                        petConditions.length === key + 1 
                                        ? 
                                            <>
                                                <ButtonDelete onClick={() => removeCondition(key)}>
                                                    Remove
                                                </ButtonDelete>
                                                <ButtonAdd type="mobile" onClick={() => addCondition()}>
                                                    + Add
                                                </ButtonAdd>
                                            </>
                                        :
                                            <ButtonDelete onClick={() => removeCondition(key)}>
                                                Remove
                                            </ButtonDelete>
                                }
                            </div>
                        )
                    })}
                </Form.Group>
                <ButtonNext onClick={() => ValidatInfo()}>
                    Next
                </ButtonNext>
            </ContainerOther>
        </Container>
    </>
)
}
