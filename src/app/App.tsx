import React, {useEffect} from 'react';
import './App.css';
import Settings from "../components/Settings/Settings";
import Counter from '../components/Counter/Counter';
import {useDispatch, useSelector} from "react-redux";
import {setCounterValueAC, setInitialValuesAC, toggleErrorAC} from "./app-reducer";
import {AppRootStateType} from "./store";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        let startValueFromLocalStorageAsString: string | null  = localStorage.getItem('startValue')
        let maxValueFromLocalStorageAsString: string | null = localStorage.getItem('maxValue')
        if (startValueFromLocalStorageAsString && maxValueFromLocalStorageAsString) {
            let localStorageStartValue = JSON.parse(startValueFromLocalStorageAsString)
            let localStorageMaxValue = JSON.parse(maxValueFromLocalStorageAsString)
            dispatch(setInitialValuesAC(localStorageStartValue, localStorageMaxValue))
            dispatch(setCounterValueAC(localStorageStartValue))
        }
    }, [])

    const counterValue = useSelector<AppRootStateType, number>((state) => state.app.counterValue)
    const startValue =  useSelector<AppRootStateType, number>((state) => state.app.startValue)
    const maxValue = useSelector<AppRootStateType, number>((state) => state.app.maxValue)
    const error = useSelector<AppRootStateType, boolean>((state) => state.app.error)
    const showHint = useSelector<AppRootStateType, boolean>((state) => state.app.showHint)

    const toggleError = (value: boolean) => {
        dispatch(toggleErrorAC(value))
    }
    const setValueSettings = (startValue: number, maxValue: number) => {
        dispatch(setInitialValuesAC(startValue, maxValue))
        dispatch(setCounterValueAC(startValue))
    }
    const setValuesToLocalStorage = (startValue: number, maxValue: number) => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    const inc = () => {
            dispatch(setCounterValueAC(counterValue + 1))
    }
    const reset = () => {
        dispatch(setCounterValueAC(startValue))
    }

    return (
        <div className="App">
            <Settings startValue={startValue}
                      maxValue={maxValue}
                      setValueSettings={setValueSettings}
                      toggleError={toggleError}
                      error={error}
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
