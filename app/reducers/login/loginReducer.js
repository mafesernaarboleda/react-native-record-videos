/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';

const initialState = {
  loading: false,
  user: {},
  apiError: '',
  successLogin: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        apiError: '',
      };
    case types.LOGIN_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        user: {},
        successLogin: false,
      };
    case types.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        user: action.payload.user,
        successLogin: true,
      };
    case types.SET_ERROR:
      return {
        ...state,
        apiError: action.error,
      };
    case types.LOGOUT:
      return {
        ...state,
        loading: false,
        user: {},
        apiError: '',
        successLogin: false,
      };
    default:
      return state;
  }
};

export default login;
