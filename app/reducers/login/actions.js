/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';
import userApi from '../../api/user';
import { AsyncStorage } from 'react-native';

export function loginRequest() {
  return {
    type: types.LOGIN_REQUEST,
  };
}

export function loginRequestFail(error) {
  return {
    type: types.LOGIN_REQUEST_FAIL,
    error,
  };
}

export function setError(error) {
  return {
    type: types.SET_ERROR,
    error,
  };
}

export function loginRequestSuccess(payload) {
  return {
    type: types.LOGIN_REQUEST_SUCCESS,
    payload,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}

export async function login(user) {
  return (dispatch) => {
    dispatch(loginRequest());
    return userApi.login(user)
      .then((response) => response.json())
      .then((response) => {
        if (!response.token) {
          return dispatch(loginRequestFail('Invalid email or password. Please try again.'));
        }else{
          dispatch(loginRequestSuccess(response));
          await AsyncStorage.setItem('token', response.token);
          await AsyncStorage.setItem('user', response.user);
        }
      });
  };
}
