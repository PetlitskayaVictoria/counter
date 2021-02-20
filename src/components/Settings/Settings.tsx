import React, {ChangeEvent, useState} from 'react';
import SettingsContainer from "./SettingsContainer/SettingsContainer";
import {ButtonElement} from "../Buttons/ButtonElement/ButtonElement";
import classes from './../Container.module.css'

type SettingsType = {
    setValueSettings: (startValue: number, maxValue: number) => void
    startValue: number
    maxValue: number
    toggleError: (value: boolean) => void
    error: boolean
    setShowHint: (value: boolean) => void
    setValuesToLocalStorage: (startValue: number, maxValue: number) => void
}

function Settings(props: SettingsType) {

    let [startValue, setStartValue] = useState<number>(props.startValue)
    let [maxValue, setMaxValue] = useState<number>(props.maxValue)

    const startValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue = Number(e.currentTarget.value)
        if(newStartValue < 0) props.toggleError(true)
        if(newStartValue === maxValue) props.toggleError(true)
        if(props.error && newStartValue === 0) props.toggleError(false)
        if(props.error && maxValue > newStartValue) props.toggleError(false)
        setStartValue(newStartValue)
        props.setShowHint(true)
    }

    const maxValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = Number(e.currentTarget.value)
        if(newMaxValue === startValue) props.toggleError(true)
        if(props.error && newMaxValue > startValue) props.toggleError(false)
        setMaxValue(newMaxValue)
        props.setShowHint(true)
    }


    const setValueSettings = () => {
        props.setValuesToLocalStorage(startValue, maxValue)
        props.setValueSettings(startValue, maxValue)
        props.setShowHint(false)
    }

    return (
        <div className={classes.container}>
            <div className={classes.contentContainer}>
                <SettingsContainer startValue={startValue}
                                   maxValue={maxValue}
                                   startValueOnChange={startValueOnChange}
                                   maxValueOnChange={maxValueOnChange}
                />

            </div>
            <div className={classes.buttonsContainer}>
                <ButtonElement title={"SET"}
                               disabled={props.error}
                               onClickCallBack={setValueSettings}/>
            </div>
        </div>
    )
}

export default Settings
