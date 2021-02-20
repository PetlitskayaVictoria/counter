import React, {useState} from 'react';
import './App.css';
import Settings from "./components/Settings/Settings";
import Counter from './components/Counter/Counter';

function App() {
    let startValueFromLocalStorageAsString: string | null  = localStorage.getItem('startValue')
    let startValueFromLocalStorageAsNumber: number | null = startValueFromLocalStorageAsString ? JSON.parse(startValueFromLocalStorageAsString) : null
    let maxValueFromLocalStorageAsString: string | null  = localStorage.getItem('maxValue')
    let maxValueFromLocalStorageAsNumber: number | null = maxValueFromLocalStorageAsString ? JSON.parse(maxValueFromLocalStorageAsString) : null

    let [startValue, setStartValue] = useState<number>(startValueFromLocalStorageAsNumber ? startValueFromLocalStorageAsNumber : 0)
    let [maxValue, setMaxValue] = useState<number>(maxValueFromLocalStorageAsNumber ? maxValueFromLocalStorageAsNumber : 5)
    let [counterValue, setCounterValue] = useState<number>(startValue)
    let [showHint, setShowHint] = useState(false)
    let [error, setError] = useState(false)
    const toggleError = (value: boolean) => {
        setError(value)
    }

    const setValueSettings = (startValue: number, maxValue: number) => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setCounterValue(startValue)
    }

    const setValuesToLocalStorage = (startValue: number, maxValue: number) => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }

    const inc = () => {
            setCounterValue(counterValue + 1)
    }
    const reset = () => {
        setCounterValue(startValue)
    }


    return (
        <div className="App">
            <Settings startValue={startValue}
                      maxValue={maxValue}
                      setValueSettings={setValueSettings}
                      toggleError={toggleError}
                      error={error}
                      setShowHint={setShowHint}
                      setValuesToLocalStorage={setValuesToLocalStorage}
            />
            <Counter counterValue={counterValue}
                     maxValue={maxValue}
                     startValue={startValue}
                     reset={reset} inc={inc}
                     error={error}
                     showHint={showHint}
            />
        </div>
    );
}

export default App;
