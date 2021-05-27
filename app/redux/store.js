import { createStore, combineReducers } from 'redux'
import Reducer from './reducers/reducers'

const globalReducer = combineReducers({
    globalState: Reducer
})


function configureStore() {
    return createStore(globalReducer)
}

export default configureStore




/**
 * react-thunk kullanırsak redux'a middleware olarak
 * aşağıdaki gibi bağlıyoruz.
 */

/*
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from './reducers/reducers'

const globalReducer = combineReducers({
    globalState: Reducer
})

export default function configureStore() {
    return createStore(reducers, applyMiddleware(thunk));
}

*/
