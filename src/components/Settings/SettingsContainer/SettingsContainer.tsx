import React, {ChangeEvent} from 'react';
import classes from './SettingsContainer.module.css'

type SettingsContainerType = {
    startValue: number
    maxValue: number
    startValueOnChange: (e: ChangeEvent<HTMLInputElement>) => void
    maxValueOnChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function SettingsContainer(props: SettingsContainerType) {

    return (
        <div className={classes.settingsContainer}>
            <div className={classes.valueSettingsContainer}>
                <span>Max value:</span>
                <input type="number"
                       value={props.maxValue}
                       onChange={props.maxValueOnChange}
                       className={props.startValue >= props.maxValue || props.maxValue < 0 ? classes.error : ""}
                />
            </div>
            <div className={classes.valueSettingsContainer}>
                <span>Start value:</span>
                <input type="number"
                       value={props.startValue}
                       onChange={props.startValueOnChange}
                       className={props.startValue >= props.maxValue || props.startValue < 0 ? classes.error : ""}
                />
            </div>
        </div>
    );
}

export default SettingsContainer;
