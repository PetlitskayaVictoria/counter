import React from 'react';
import classes from './ButtonElement.module.css'

type ButtonsType = {
    title: string
    disabled: boolean
    onClickCallBack: () => void
}

export function ButtonElement(props: ButtonsType) {

    return (
        <div className={classes.buttonContainer}>
            <button className={classes.buttonStyle}
                    disabled={props.disabled}
                    onClick={props.onClickCallBack}> {props.title} </button>
        </div>
    );
}

