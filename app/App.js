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
