import React from 'react';
import classes from './Counter.module.css'

type CounterType = {
    counterValue: number
}

function Counter(props: CounterType) {
  return (
    <div className={classes.counterContainer}>
      <div>
            <span className={((props.counterValue === 5) ? classes.red : "")}> {props.counterValue} </span>
      </div>
    </div>
  );
}

export default Counter;
