import React, { useState } from 'react'
import { Form, Label, Input } from '@blueupcode/components'
import styles from 'styles/ProcessStyles/Steps.module.scss'
import { ButtonNext, ContainerOther, ButtonScan } from './FourthStepUi'
import { Container } from '@blueupcode/components'
import Image from 'next/image'
import TagImage from 'static/assets/tag.png'
import { QrReader } from 'react-qr-reader';
//import { swal } from "components/swal/instance"
import { useDispatch } from 'react-redux'
import { ActivationAction } from 'store/actions/generalInfo'

export default function TagsActivate({NextStep}) {
  const [activate, setActivate] = useState('')
  const [activateCamera, setActivateCamera] = useState(false)
  const dispatch = useDispatch();

  const ValidatInfo = () => {
    dispatch(ActivationAction(activate));
    NextStep()
  }

  const handleScan = (data) => {
    if (data) {
        /*if(data.includes('https://tag.furrytag.com')){
            const value = data.split('tag.furrytag.com/');
            setActivate(value[1])
        }else{
            swal.fire({ text: 'QrCode is not valid', icon: "error" })
        }*/
        const value = data.split('tag.furrytag.com/');
        setActivate(value[1])
        setActivateCamera(false)
    }
  };
  return (
    <div>
        <Container>
            <ContainerOther width={'650px'}>
                <h1 className={styles.TitleStep5}>Activate your Furry Tag</h1>
                <h3 className={styles.UnderTitleStep5}>Activating your furry Tag is very simple, follow the next steps and start your journey with us.</h3>
                {
                    activateCamera ?
                    <div className={styles.QrCodeCamera}> 
                        <QrReader
                            delay={1000}
                            constraints={{facingMode : 'environment'}}
                            onResult={(result) => {
                                if (result) {
                                    handleScan(result?.text);
                                }
                            }}
                            style={{ width: '100%'  }}
                        />
                    </div>
                    :
                    <>
                        <Image src={TagImage} height={120} width={110} alt="tag image" />
                        <ButtonScan onClick={() => setActivateCamera(true)}>
                            [Scan with camera]
                        </ButtonScan>
                    </>
                }
                
                <h3 className={styles.UnderTitleStep6}>Simply type in the alphanumeric ID into the field below. it typically follows the URL: tag.furrytag.com</h3>
                <Form.Group className={styles.FormSimple}>
                    <Label for="activate">Enter Activation Tag ID</Label>
                    <Input onChange={(e) => setActivate(e.target.value)} value={activate} className={activate ? styles.inputUpdated : ''} type="text" size="lg" id="activate" placeholder="Activation ID" />
                </Form.Group>
                <ButtonNext onClick={() => ValidatInfo()}>
                    Activate
                </ButtonNext>
            </ContainerOther>
        </Container>
    </div>
  )
}
