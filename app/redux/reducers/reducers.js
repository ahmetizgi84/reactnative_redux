
import { INCREASE_COUNTER, DECREASE_COUNTER, SET_CHARACTER_LIST_COUNT } from '../types'

const INITIAL_STATE = {
    counter: 0,
    characterListLength: 0
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return { ...state, counter: state.counter + 1 }
        case DECREASE_COUNTER:
            return { ...state, counter: state.counter - 1 }
        case SET_CHARACTER_LIST_COUNT:
            return { ...state, characterListLength: action.payload }
        default:
            return state
    }
}

export default reducer