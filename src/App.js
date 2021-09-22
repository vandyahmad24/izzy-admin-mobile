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
// console.reportErrorsAsExceptions = false; // copy paste this line in your App.js deploy nnti

import Router from './router';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
