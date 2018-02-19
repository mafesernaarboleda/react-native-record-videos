/**
 * @author Maria Fernanda Serna
 */
import { AsyncStorage } from 'react-native';

import * as types from './constants';
import userApi from '../../api/user';

export function registerRequest() {
  return { type: types.REGISTER_REQUEST };
}

export function registerRequestFail(error) {
  return { type: types.REGISTER_REQUEST_FAIL, error };
}

export function setError(error) {
  return { type: types.SET_ERROR, error };
}

export function registerRequestSuccess(payload) {
  return { type: types.REGISTER_REQUEST_SUCCESS, payload };
}

export async function register(user) {
  return (dispatch) => {
    dispatch(registerRequest());
    return userApi
      .register(user)
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode >= 400) {
          return dispatch(registerRequestFail('We had a problem with your registration. Please try again.'));
        }else{
          dispatch(registerRequestSuccess(response));
          await AsyncStorage.setItem('token', response.token);
        }
      });
  };
}

