import React, {ChangeEvent, useEffect, useState} from 'react';
import SettingsContainer from "./SettingsContainer/SettingsContainer";
import {ButtonElement} from "../Buttons/ButtonElement/ButtonElement";
import classes from './../Container.module.css'
import {useDispatch} from "react-redux";
import {showHintAC} from "../../app/app-reducer";


type SettingsType = {
    setValueSettings: (startValue: number, maxValue: number) => void
    startValue: number
    maxValue: number
    toggleError: (value: boolean) => void
    error: boolean
    setValuesToLocalStorage: (startValue: number, maxValue: number) => void
}

function Settings(props: SettingsType) {
    const dispatch = useDispatch()

    useEffect(() => {
        setLocalStartValue(props.startValue)
        setLocalMaxValue(props.maxValue)
    }, [props.startValue, props.maxValue])

    let [localStartValue, setLocalStartValue] = useState<number>(props.startValue)
    let [localMaxValue, setLocalMaxValue] = useState<number>(props.maxValue)

    const startValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newStartValue = Number(e.currentTarget.value)
        if(newStartValue < 0) props.toggleError(true)
        if(newStartValue === localMaxValue) props.toggleError(true)
        if(props.error && newStartValue === 0) props.toggleError(false)
        if(props.error && localMaxValue > newStartValue) props.toggleError(false)
        setLocalStartValue(newStartValue)
        dispatch(showHintAC(true))
    }

    const maxValueOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = Number(e.currentTarget.value)
        if(newMaxValue === localStartValue) props.toggleError(true)
        if(props.error && newMaxValue > localStartValue) props.toggleError(false)
        setLocalMaxValue(newMaxValue)
        dispatch(showHintAC(true))
    }


    const setValueSettings = () => {
        props.setValuesToLocalStorage(localStartValue, localMaxValue)
        props.setValueSettings(localStartValue, localMaxValue)
        dispatch(showHintAC(false))
    }

    return (
        <div className={classes.container}>
            <div className={classes.contentContainer}>
                <SettingsContainer startValue={localStartValue}
                                   maxValue={localMaxValue}
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
