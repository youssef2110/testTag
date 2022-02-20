import React, { useState } from 'react'
import { Form, Label, Input, Container } from '@blueupcode/components'
import { ContainerOther, ButtonNext } from './ThirdStepUi'
import styles from 'styles/ProcessStyles/Steps.module.scss'
import Link from 'next/link'
import google from 'static/assets/googleIcon.png'
import Image from 'next/image'
import { swal } from "components/swal/instance"
import { firebaseClient } from "components/firebase/firebaseClient"

export default function SignUp({Valider}) {

  const [infoUser, setInfoUser] = useState({email : '', password : '', rePassword: ''})
  
  const onChangeInfo = (text,key) => {
    const newArr = {...infoUser};
    newArr[key] = text;
    setInfoUser(newArr)
  }
  const onSubmit = async ({ email, password }) => {

    // Trying to register user account to firebase
    await firebaseClient
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
          console.log(res)
      })
      .catch((err) => {
        // Show the error message if register is failed
        swal.fire({ text: err.message, icon: "error" })
      })
  }


  const validation = () => {
      if(infoUser.password.length < 7){
        swal.fire({ text: 'password is too short', icon: "error" })
      }else{
          if(infoUser.password !== infoUser.rePassword){
            swal.fire({ text: 'Both passwords must be the same ', icon: "error" })
          }else{
            Valider()
            onSubmit(infoUser)
          }
      }
  }

  return (
    <div className={styles.SignupContainer}>
        <ContainerOther width='auto'>
            <Container>
                <h1 className={styles.TitleStep2}>Create your Furry Tag Account</h1>
                <h3 className={styles.UnderTitleStep2}>Already have a furry tag account? Log In <Link href='/login'><a target="_blank">Login</a></Link></h3>
                <Form.Group className={styles.FormSimple3}>
                    <Label for="email">Email</Label>
                    <Input onChange={(e) => onChangeInfo(e.target.value,'email')} value={infoUser.email} className={infoUser.email ? styles.inputUpdated : ''} type="email" size="lg" id="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className={styles.FormSimple3}>
                    <Label for="password">Password</Label>
                    <Input onChange={(e) => onChangeInfo(e.target.value,'password')} value={infoUser.password} className={infoUser.password ? styles.inputUpdated : ''} type="password" size="lg" id="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className={styles.FormSimple3}>
                    <Label for="Repassword">Re-type Password</Label>
                    <Input onChange={(e) => onChangeInfo(e.target.value,'rePassword')} value={infoUser.rePassword} className={infoUser.rePassword ? styles.inputUpdated : ''} type="password" size="lg" id="Repassword" placeholder="Re-type Password" />
                </Form.Group>
                <ButtonNext onClick={() => validation('dv')}>
                    Continuer
                </ButtonNext>
                <div className={styles.TitleSignRs}>
                    <p><span>or SIGN UP with</span></p>
                </div>
                <div className={styles.ButtonRs}>
                    <div className={styles.Rs}>
                        <Image src={google} width={20} height={20} alt='google' />
                        <span>Facebook</span>
                    </div>
                    <div className={styles.Separator} />
                    <div className={styles.Rs}>
                        <Image src={google} width={20} height={20} alt='google' />
                        <span>Google</span>
                    </div>
                    <div className={styles.Separator} />
                    <div className={styles.Rs}>
                        <Image src={google} width={20} height={20} alt='google' />
                        <span>Tiktok</span>
                    </div>
                    <div className={styles.Separator} />
                    <div className={styles.Rs}>
                        <Image src={google} width={20} height={20} alt='google' />
                        <span>Amazon</span>
                    </div>
                </div>
            </Container>
        </ContainerOther>
        <div className={styles.ContainerImage}>
        </div>
    </div>
  )
}
