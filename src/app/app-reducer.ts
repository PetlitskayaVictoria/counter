
const initialState = {
    startValue: 0,
    maxValue: 5,
    counterValue: 0,
    showHint: false,
    error: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET_VALUES": return {...state, ...action.payload}
        case "SET_COUNTER_VALUE": return {...state, ...action.payload}
        case "SET_ERROR": return {...state, ...action.payload}
        case "SHOW_HINT": return {...state, ...action.payload}
        default:
            return {...state}
    }
}

export const setInitialValuesAC = (startValue: number, maxValue: number) => ({
    type: SET_VALUES,
    payload: {
        startValue, maxValue
    }
} as const)
export const setCounterValueAC = (counterValue: number) => ({
    type: SET_COUNTER_VALUE,
    payload: {
        counterValue
    }
} as const)
export const toggleErrorAC = (error: boolean) => ({
    type: SET_ERROR, payload: {error}
} as const)
export const showHintAC = (showHint: boolean) => ({
    type: SHOW_HINT, payload: {showHint}
} as const)

export type InitialStateType = {
    startValue: number
    maxValue: number
    counterValue: number
    showHint: boolean
    error: boolean
}

const SET_VALUES = "SET_VALUES"
const SET_COUNTER_VALUE = "SET_COUNTER_VALUE"
const SET_ERROR = "SET_ERROR"
const SHOW_HINT = "SHOW_HINT"

type ActionsTypes =
    | ReturnType<typeof setInitialValuesAC>
    | ReturnType<typeof setCounterValueAC>
    | ReturnType<typeof toggleErrorAC>
    | ReturnType<typeof showHintAC>
