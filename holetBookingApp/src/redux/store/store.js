import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import loginReducer from '../features/login/loginSlice.js';
import onboardingReducer from '../features/onboardingUI/oboardingUISlice.js';
import splassReducer from '../features/splass/splassSlice.js';
import {combineReducers} from 'redux';
import HotelsDataReducer from '../features/hotelsData/hotelsDataSlice.js';

const reducer = combineReducers({
  onboarding: onboardingReducer,
  splass: splassReducer,
  login: loginReducer,
  hotelsData: HotelsDataReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['onboarding', 'login'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
