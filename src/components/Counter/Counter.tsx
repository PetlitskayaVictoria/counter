import React from 'react';
import CounterContainer from "./CounterContainer/CounterContainer";
import {ButtonElement} from "../Buttons/ButtonElement/ButtonElement";
import classes from './../Container.module.css'

type CounterType = {
    counterValue: number
    maxValue: number
    startValue: number
    reset: () => void
    inc: () => void
    error: boolean
    showHint: boolean
}

function Counter(props: CounterType) {
    const reset = () => {
        props.reset()
    }

    const inc = () => {
        props.inc()
    }

    return (
        <div className={classes.container}>
            <div className={classes.contentContainer}>
                <CounterContainer counterValue={props.counterValue}
                                  maxValue={props.maxValue}
                                  startValue={props.startValue}
                                  error={props.error}
                                  showHint={props.showHint}
                />
            </div>
            <div className={classes.buttonsContainer}>
                <ButtonElement title={"inc"}
                               disabled={props.counterValue === props.maxValue || props.error}
                               onClickCallBack={inc} />
                <ButtonElement title={"reset"}
                               disabled={props.counterValue === props.startValue || props.error}
                               onClickCallBack={reset}/>
            </div>
        </div>
    )
}

export default Counter
