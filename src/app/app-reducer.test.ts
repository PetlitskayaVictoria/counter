import {
    appReducer,
    InitialStateType,
    setCounterValueAC,
    setInitialValuesAC,
    showHintAC,
    toggleErrorAC
} from "./app-reducer";

let startState: InitialStateType

beforeEach(() => {
    startState = {
        startValue: 0,
        maxValue: 5,
        counterValue: 0,
        showHint: false,
        error: false
    };
})

test('correct initial settings values are set', () => {

    const action = setInitialValuesAC(3, 9);

    const endState = appReducer(startState, action)

    expect(endState.startValue).toEqual(3)
    expect(endState.maxValue).toEqual(9)
});

test('correct counter value is set', () => {

    const action = setCounterValueAC(5);

    const endState = appReducer(startState, action)

    expect(endState.counterValue).toEqual(5)
});

test('error is set', () => {

    const action = toggleErrorAC(true);

    const endState = appReducer(startState, action)

    expect(endState.error).toBeTruthy()
});

test('showHint is set', () => {

    const action = showHintAC(true);

    const endState = appReducer(startState, action)

    expect(endState.showHint).toBeTruthy()
});


