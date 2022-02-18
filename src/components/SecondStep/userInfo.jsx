import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Form, Label, Input } from '@blueupcode/components'
import styles from 'styles/ProcessStyles/Steps.module.scss'
import { ContainerOther, ButtonNext,ButtonAdd } from './SecondStepUi'
import { ButtonDelete } from './SecondStepUi'
import { useDispatch } from 'react-redux'
import { contactInfoAction } from 'store/actions/generalInfo'

export default function UserInfo({NextStep}) {

  const [contactInfo, setContactInfo] = useState([{first_name : '', last_name : '' ,phoneStart: '', phone : '', email : '' , method : []}])
  const dispatch = useDispatch();
  useEffect(function() {
    if (typeof window !== "undefined") {
        if(localStorage.getItem("generalInfo")){
            setContactInfo(JSON.parse(localStorage.getItem("generalInfo")).contact);
        }
    }
  },[]);
  const ValidatInfo = () => {
    dispatch(contactInfoAction(contactInfo));
    NextStep()
    }

  const onChangeContact = (text,name,key) => {
    const newArr = [...contactInfo];
    newArr[key][name] = text;
    setContactInfo(newArr)
  }
  const onChangeContactMethod = (check,type,key) => {
    const newArr = [...contactInfo];
    var methods = newArr[key].method
    methods = methods.filter((element) => element !== type);
    if(check){
        methods.push(type)
    }
    newArr[key].method = methods;
    setContactInfo(newArr)
  }
  const addContact = (e) => {
    e.preventDefault();
    var newArr = [...contactInfo];
    newArr.push({first_name : '', last_name : '' ,phoneStart: '', phone : '', email : '' , method : []});
    setContactInfo(newArr)
  }
  const removeContact = (e,key) => {
    e.preventDefault();
    var newArr = [...contactInfo];
    newArr = newArr.filter((element,index) => index !== key);
    setContactInfo(newArr)
  }
  return (
      <>
        <h1 className={styles.TitleStep3}>{"Main Owner's Contact"}</h1>
        <h3 className={styles.UnderTitleStep3}>Lorem Ipsum to the data avaliable to roadagea and data</h3>
        <Container>
            <ContainerOther width='auto'>
                {contactInfo.map( (contact,key) => {
                    return (
                        <Form key={key} className={styles.FormComplexe}>
                            {contactInfo.length > 1 && key > 0 ? <h1 className={styles.FormUserTitle}>Add Contact</h1> : ''}
                            <Row form className={styles.FormDiv}>
                                <Col lg="6">
                                    {/* BEGIN Form Group */}
                                    <Form.Group className={styles.FormSimple2}>
                                    <Label for="FirstName">First Name</Label>
                                    <Input
                                        type="text"
                                        id="FirstName"
                                        value={contact.first_name}
                                        onChange={(e) => onChangeContact(e.target.value,'first_name',key)}
                                        placeholder="First Name"
                                    />
                                    </Form.Group>
                                    {/* BEGIN Form Group */}
                                </Col>
                                <Col lg="6">
                                    {/* BEGIN Form Group */}
                                    <Form.Group className={styles.FormSimple2}>
                                    <Label for="LastName">Last Name</Label>
                                    <Input
                                        type="text"
                                        id="LastName"
                                        value={contact.last_name}
                                        onChange={(e) => onChangeContact(e.target.value,'last_name',key)}
                                        placeholder="Last Name"
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
                                            value={contact.phoneStart}
                                            onChange={(e) => onChangeContact(e.target.value,'phoneStart',key)}
                                            placeholder="+91"
                                        />
                                        <Input
                                            type="text"
                                            id="PhoneNumber"
                                            value={contact.phone}
                                            onChange={(e) => onChangeContact(e.target.value,'phone',key)}
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    </Form.Group>
                                    {/* BEGIN Form Group */}
                                </Col>
                                <Col lg="6">
                                    {/* BEGIN Form Group */}
                                    <Form.Group className={styles.FormSimple2}>
                                    <Label for="Email">Email</Label>
                                    <Input
                                        type="email"
                                        id="Email"
                                        value={contact.email}
                                        onChange={(e) => onChangeContact(e.target.value,'email',key)}
                                        placeholder="Email"
                                    />
                                    </Form.Group>
                                    {/* BEGIN Form Group */}
                                </Col>
                                <Col lg="8">
                                    <div className={styles.CheckBox2}>
                                        <div className={styles.CheckBox2Label}>
                                            <Label>Preferred Method of Contact</Label>
                                            <Label>Choose all that apply</Label>
                                        </div>
                                        <Form.Group className={styles.FormCheck} check inline>
                                            <Input
                                                type="checkbox"
                                                id="Call"
                                                onChange={(e) => onChangeContactMethod(e.target.checked,'call',key)}
                                                checked={contact.method.includes('call')}
                                            />
                                            <Label className={!contact.method.includes('call') ? styles.ColorGrey : ''} check for="Call">
                                                Call
                                            </Label>
                                        </Form.Group>
                                        <Form.Group className={styles.FormCheck} check inline>
                                            <Input
                                                type="checkbox"
                                                id="Email"
                                                onChange={(e) => onChangeContactMethod(e.target.checked,'email',key)}
                                                checked={contact.method.includes('email')}
                                            />
                                            <Label className={!contact.method.includes('email') ? styles.ColorGrey : ''} check for="Email">
                                                Email
                                            </Label>
                                        </Form.Group>
                                        <Form.Group className={styles.FormCheck} check inline>
                                            <Input
                                                type="checkbox"
                                                id="Text"
                                                onChange={(e) => onChangeContactMethod(e.target.checked,'text',key)}
                                                checked={contact.method.includes('text')}
                                            />
                                            <Label className={!contact.method.includes('text') ? styles.ColorGrey : ''} check for="Text">
                                                Text
                                            </Label>
                                        </Form.Group>
                                    </div>
                                </Col>

                                {contactInfo.length > 1 ?
                                    key === 0 ?
                                    ''
                                    :
                                    <Col lg="4">
                                        <div className={styles.Buttons}>
                                            <ButtonDelete onClick={(e) => removeContact(e,key)}>
                                                Remove
                                            </ButtonDelete>
                                            {contactInfo.length === key+1 && <ButtonAdd onClick={(e) => addContact(e)}>
                                                + Add
                                            </ButtonAdd>}
                                        </div>
                                    </Col>
                                    :
                                    <Col lg="4">
                                        <div className={styles.Buttons}>
                                            <ButtonAdd onClick={(e) => addContact(e)}>
                                                + Add
                                            </ButtonAdd>
                                        </div>
                                    </Col>
                                }
                            </Row>
                        </Form>
                    )
                })}
                <ButtonNext onClick={() => ValidatInfo()}>
                    Next
                </ButtonNext>
            </ContainerOther>
        </Container>
    </>
)
}
