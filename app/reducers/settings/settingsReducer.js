/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';

const initialState = {
  loading: false,
  apiError: '',
  successGetProfile: false,
  profile: {},
  successUpdateProfile: false,
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case types.SETTINGS_GET_REQUEST:
      return {
        ...state,
        loading: true,
        apiError: ''
      };
    case types.SETTINGS_GET_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        profile: {},
        successGetProfile: false
      };
    case types.SETTINGS_GET_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        profile: action.payload.user,
        successGetProfile: true,
        successUpdateProfile: false,
      };
    case types.SETTINGS_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
        apiError: ''
      };
    case types.SETTINGS_UPDATE_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        profile: {},
        successUpdateProfile: false,
      };
    case types.SETTINGS_UPDATE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        profile: action.payload.user,
        successGetProfile: false,
        successUpdateProfile: true,
      };
    case types.SET_ERROR:
      return {
        ...state,
        apiError: action.error,
      };
    default:
      return state;
  }
};

export default settings;
