/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';

// console.reportErrorsAsExceptions = false; // copy paste this line in your App.js deploy nnti

import Router from './router';
import store from './redux/store';
import {Loading} from './components';

const MainApp = () => {
  const stateGlobal = useSelector(state => state);
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PaperProvider>
      <FlashMessage position="top" />
      {stateGlobal.loading && <Loading />}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
