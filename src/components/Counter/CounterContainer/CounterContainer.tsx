import React from 'react';
import classes from './CounterContainer.module.css'

type CounterType = {
    counterValue: number
    maxValue: number
    startValue: number
    error: boolean
    showHint: boolean
}

function CounterContainer(props: CounterType) {

    const messageText = props.error ? "Incorrect value!" : props.showHint ? "enter values and press 'set'" : props.counterValue

  return (
    <div>
      <div>
            <span className={((props.counterValue === props.maxValue || props.error) ? classes.red : "")}>
                {messageText}
            </span>
      </div>
    </div>
  );
}

export default CounterContainer;
