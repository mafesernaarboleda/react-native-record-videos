/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './app/reducers/index';
import App from './app/index';

const loggerMiddleware = createLogger();
const store = createStore(reducers, applyMiddleware(thunkMiddleware, loggerMiddleware));

const BuzzCuts = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('BuzzCuts', () => BuzzCuts);
