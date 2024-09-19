import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

import { weatherReducer } from "./UserReducer";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['weather']
}

const rootReducer = combineReducers({
  weather: weatherReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(thunk),
  });

export const persistor = persistStore(store);