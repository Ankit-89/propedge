import { AppRegistry, StatusBar } from 'react-native';
import React from 'react';
import Entry from './src/boot/entry';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store from './src/rematch';

import { makeServer } from './src/apis/mock/server';


if (process.env['API_KEY'] === 'mock') {
  makeServer({ environment: 'mock' });
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={getPersistor()}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FFF" />
        <Entry />
      </PersistGate>
    </Provider>
  )
};

export default App;

