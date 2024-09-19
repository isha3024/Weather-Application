import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { MainStackNavigation } from './navigation'
import { getWeatherData } from './services/apiCalls'
import { MainContextProvider } from './contexts'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/reducers'
import { PersistGate } from 'redux-persist/integration/react'


export const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainContextProvider>
          <MainStackNavigation />
        </MainContextProvider>
      </PersistGate>
    </Provider>
  )
}
