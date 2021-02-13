import React from 'react';
import classes from './Buttons.module.css'
import {ButtonElement} from "./ButtonElement/ButtonElement";

type ButtonsType = {
    inc: () => void
    reset: () => void
    counterValue: number
}

function Buttons(props: ButtonsType) {

  return (
    <div className={classes.buttonsContainer}>
          <ButtonElement title={"inc"} disabled={props.counterValue === 5} onClickCallBack={props.inc} />
          <ButtonElement title={"reset"} disabled={props.counterValue === 0} onClickCallBack={props.reset}/>
    </div>
  );
}

export default Buttons;
