
import { INCREASE_COUNTER, DECREASE_COUNTER, SET_CHARACTER_LIST_COUNT } from '../types'


export const increaseCounter = (dispatch) => () => {
    dispatch({ type: INCREASE_COUNTER })
}

export const decreaseCounter = dispatch => () => {
    dispatch({ type: DECREASE_COUNTER })
}

export const setCharacterLength = (length) => {
    return {
        type: SET_CHARACTER_LIST_COUNT,
        payload: length
    }
}

