import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import Buttons from "./components/Buttons/Buttons";

function App() {

    let [counterValue, setCounterValue] = useState<number>(0)

    const inc = () => {
            setCounterValue(counterValue + 1)
    }
    const reset = () => {
        setCounterValue(0)
    }


    return (
        <div className="App">
            <div className="container">
                <Counter counterValue={counterValue}/>
                <Buttons inc={inc} reset={reset} counterValue={counterValue}/>
            </div>
        </div>
    );
}

export default App;
