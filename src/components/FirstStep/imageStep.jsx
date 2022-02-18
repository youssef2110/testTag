import React, { useEffect, useState } from 'react'
import { Container } from '@blueupcode/components'
import { ContainerOther } from './FirstStepUi'
import styles from 'styles/ProcessStyles/Steps.module.scss'
import { ButtonNext } from './FirstStepUi'
import {useDropzone} from 'react-dropzone';
import Image from 'next/image'
import DropLogo from 'static/assets/Upload.png'
import { petPictureAction } from 'store/actions/petInfoAction'
import { useDispatch } from 'react-redux'
import { swal } from "components/swal/instance"


export default function ImageStep({NextStep}) {
    const [files, setFiles] = useState([]);
    const [filesPreview, setFilesPreview] = useState([]);
    const [petName, setPetName] = useState('')
    const dispatch = useDispatch();
    const ValidatInfo = () => {
        dispatch(petPictureAction({picture : files, picturePreview : filesPreview}));
        NextStep()
    }
    useEffect(function() {
        if (typeof window !== "undefined") {
            if(localStorage.getItem("petInfo")){
                JSON.parse(localStorage.getItem("petInfo")).picture ? setFiles(JSON.parse(localStorage.getItem("petInfo")).picture) : null;
                JSON.parse(localStorage.getItem("petInfo")).picturePreview ? setFilesPreview(JSON.parse(localStorage.getItem("petInfo")).picturePreview) : null;
                setPetName(JSON.parse(localStorage.getItem("petInfo")).name);
            }
        }
    },[]);
    
    const {getRootProps, getInputProps} = useDropzone({
    accept: '.pdf, .txt, image/*',
    maxSize: 2097152,
    onDrop: (acceptedFiles, fileRejections) => {
        if(acceptedFiles.length > 0){
            setFiles(acceptedFiles[0]);
            setFilesPreview(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
        if(fileRejections.length > 0){
            swal.fire({ text: 'error', icon: "error" })
        }
    }
    });


  return (
      <>
        <h1 className={styles.TitleStep}>{"Upload "+petName+"'s Picture"}</h1>
        <Container>
            <div {...getRootProps({className: 'dropzone'})} className={styles.DropZone}>
                <input {...getInputProps()} />
                {
                    filesPreview.length > 0
                    ?
                        <div className={styles.ImagePet}>
                            <Image src={filesPreview[0].preview} layout='fill' objectFit='contain' alt="Pet's picture" />
                        </div>
                    :
                    <>
                        <Image src={DropLogo} height={60} width={70} alt='DropLogo' />
                        <p>*Drag & Drop photo or click to browse</p>
                        <p>(Max size is file is 2MB in txt and pdf formate)</p>
                    </>
                }
            </div>
            <ContainerOther width='auto'>
                <ButtonNext onClick={() => ValidatInfo()}>
                    Next
                </ButtonNext>
            </ContainerOther>
        </Container>
    </>
)
}
