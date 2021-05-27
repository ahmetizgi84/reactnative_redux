## Redux Global State Management & React Native

### Klasör yapısı
app
    |
    |_ components
    |
    |_ redux
            |
            |_ actions
                    |_ actions.js
            |
            |_ reducers
                    |_reducers.js
            |
            |_ store.js
            |
            |_ types.js
    |
    |_ screens
    |
    |_ App.js

### types.js

```js
// types for counter
export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

// types for characterList
export const SET_CHARACTER_LIST_COUNT = 'SET_CHARACTER_LIST_COUNT'
```

### actions.js

```js
import { INCREASE_COUNTER, DECREASE_COUNTER, SET_CHARACTER_LIST_COUNT } from '../types'

export const increaseCounter = (dispatch) => () => {
    dispatch({ type: INCREASE_COUNTER })
}

export const decreaseCounter = dispatch => () => {
    dispatch({ type: DECREASE_COUNTER })
}

// action fonksiyonuna payload göndereceksem bu yapıyı kullan
export const setCharacterLength = (length) => {
    return {
        type: SET_CHARACTER_LIST_COUNT,
        payload: length
    }
}

```

### reducers.js

```js
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

```


### store.js

- Tipleri, action ve reducer'ları oluşturduktan sonra store'u oluşturabiliriz.

```js
import { createStore, combineReducers } from 'redux'
import Reducer from './reducers/reducers'

const globalReducer = combineReducers({
    globalState: Reducer
})

function configureStore() {
    return createStore(globalReducer)
}

export default configureStore

```

- action, reducer ve store oluşturuldu. Ancak uygulamaya bağlanmadı. Uygulamayla birleştirmek için:

### App.js

```js
import React from 'react'
import { View } from 'react-native'
import HomeScreen from './screens/HomeScreen'

import configureStore from './redux/store'
import { Provider } from 'react-redux'

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <HomeScreen />
      </View>
    </Provider>
  )
}

export default App

```

- Herhangi bir komponent içinde store'daki global state'lere ve actionlara aşağıdaki örnekte olduğu gibi ulaşıyoruz.

```js
import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Button } from './index'
import { useSelector, useDispatch } from 'react-redux'
import { decreaseCounter, increaseCounter } from '../redux/actions/actions'

const { width } = Dimensions.get('screen')

const Buttons = () => {
    const dispatch = useDispatch()
    const { counter } = useSelector(state => state.globalState)

    const { container, counterText } = styles
    return (
        <View style={container}>
            <Button plus callback={increaseCounter(dispatch)} />
            <Text style={counterText}>{counter}</Text>
            <Button minus callback={decreaseCounter(dispatch)} />
        </View>
    )
}
```