/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';

const initialState = {
  loading: false,
  user: {},
  apiError: '',
  indexView: 0,
  successRegister: false,
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        apiError: '',
      };
    case types.REGISTER_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        user: {},
        indexView: 0,
        successRegister: false,
      };
    case types.REGISTER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        indexView: 1,
        successRegister: true,
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

export default register;
