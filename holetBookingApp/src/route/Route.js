import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store} from '../redux/store/store.js';
import {Provider} from 'react-redux';
import AuthRoute from './AuthRoute.js';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

export default function Route() {
  const Stack = createNativeStackNavigator();
  const persiStore = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiStore}>
        <NativeBaseProvider>
          <NavigationContainer>
            <AuthRoute Stack={Stack} />
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}
