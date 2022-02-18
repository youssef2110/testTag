import React from 'react'
import styles from 'styles/ProcessStyles/ProgressBar.module.scss'
import { ProgressBarUi, ProgressPointInsideUi, ProgressPointUi, TitleStep } from './progressUi'
const Grey = '#ACACAC'
const LightGrey = '#F1F4F4'
const White = '#FFFFFF'
const Black = '#000000'
const Blue = '#608FF5'

export default function ProgressBar({step , pourcentage}) {

    // Style Title Step Color
    const TextColor = (ActuelStep, step) => {
        return ActuelStep === step ? Black : ActuelStep > step ? Black : Grey
    }

    // Style color of number
    const StepColor = (ActuelStep, step) => {
        return ActuelStep === step ? Blue : ActuelStep > step ? White : Grey
    }

    // Style Color of Gap between border and circle
    const StepBackgournd = (ActuelStep, step) => {
        return ActuelStep === step ? White : ActuelStep > step ? White : LightGrey
    }

    // Style Color border
    const StepBorder = (ActuelStep, step) => {
        return ActuelStep === step ? Blue : ActuelStep > step ? Blue : Grey
    }

    // Style Background Inside circle
    const StepBackgourndInside = (ActuelStep, step) => {
        return ActuelStep === step ? White : ActuelStep > step ? Blue : LightGrey
    }

    return (
        <div className={styles.progress}>
        <ProgressBarUi pourcentage={pourcentage}>
            <div className={styles.progressTitle}>
                <ProgressPointUi 
                    colorText={StepColor(step,1)}
                    background={StepBackgournd(step,1)}
                    border={StepBorder(step,1)}
                >
                    <ProgressPointInsideUi background={StepBackgourndInside(step,1)}>
                        1
                    </ProgressPointInsideUi>
                </ProgressPointUi>
                <TitleStep colorText={TextColor(step,1)}>Pet Info</TitleStep>                
            </div>
            <div className={styles.progressTitle}>
                <ProgressPointUi 
                    colorText={StepColor(step,2)}
                    background={StepBackgournd(step,2)}
                    border={StepBorder(step,2)}
                >
                    <ProgressPointInsideUi background={StepBackgourndInside(step,2)}>
                        2
                    </ProgressPointInsideUi>
                </ProgressPointUi>
                <TitleStep colorText={TextColor(step,2)}>Contact</TitleStep>                
            </div>
            <div className={styles.progressTitle}>
                <ProgressPointUi 
                    colorText={StepColor(step,3)}
                    background={StepBackgournd(step,3)}
                    border={StepBorder(step,3)}
                >
                    <ProgressPointInsideUi background={StepBackgourndInside(step,3)}>
                        3
                    </ProgressPointInsideUi>
                </ProgressPointUi>
                <TitleStep colorText={TextColor(step,3)}>Create account</TitleStep>                
            </div>
            <div className={styles.progressTitle}>
                <ProgressPointUi 
                    colorText={StepColor(step,4)}
                    background={StepBackgournd(step,4)}
                    border={StepBorder(step,4)}
                >
                    <ProgressPointInsideUi background={StepBackgourndInside(step,4)}>
                        4
                    </ProgressPointInsideUi>
                </ProgressPointUi>
                <TitleStep colorText={TextColor(step,4)}>Activate Tag</TitleStep>                
            </div>
        </ProgressBarUi>
    </div>
    )
}
