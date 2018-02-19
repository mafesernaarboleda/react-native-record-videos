/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';
import userApi from '../../api/user';

export function settingsUpdateRequest() {
  return {type: types.SETTINGS_UPDATE_REQUEST};
}

export function settingsUpdateRequestFail(error) {
  return {type: types.SETTINGS_UPDATE_REQUEST_FAIL, error};
}

export function setError(error) {
  return {type: types.SET_ERROR, error};
}

export function settingsUpdateRequestSuccess(payload) {
  return {type: types.SETTINGS_UPDATE_REQUEST_SUCCESS, payload};
}

export function updateProfile(data) {
  return (dispatch) => {
    dispatch(settingsUpdateRequest());
    return userApi
      .updateProfile(data)
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode >= 400) {
          return dispatch(settingsUpdateRequestFail('We had a problem with your registration. Please try again.'));
        } else {
          return dispatch(settingsUpdateRequestSuccess(response));
        }
      });
  };
}

export function settingsGetRequest() {
  return {type: types.SETTINGS_GET_REQUEST};
}

export function settingsGetRequestFail(error) {
  return {type: types.SETTINGS_GET_REQUEST_FAIL, error};
}

export function settingsGetRequestSuccess(payload) {
  return {type: types.SETTINGS_GET_REQUEST_SUCCESS, payload};
}

export function getProfile() {
  return (dispatch) => {
    dispatch(settingsGetRequest());
    return userApi
      .getProfile()
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode >= 400) {
          return dispatch(settingsGetRequestFail('We had a problem with your profile. Please try again.'));
        } else {
          return dispatch(settingsGetRequestSuccess(response));
        }
      });
  };
}
