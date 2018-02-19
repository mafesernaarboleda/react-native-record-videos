/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';

const initialState = {
  loading: false,
  themes: [],
  apiError: '',
  successThemesList: false,
  successThemesTodayList: false,
  successThemesYesterdayList: false,
  themesToday: [],
  themesYesterday: [],
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case types.THEME_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        apiError: '',
      };
    case types.THEME_LIST_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        themes: [],
        successThemesList: false,
      };
    case types.THEME_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        themes: action.payload.themes,
        successThemesList: true,
      };
    case types.THEME_LIST_TODAY_REQUEST:
      return {
        ...state,
        loading: true,
        apiError: '',
        themesToday: [],
        successThemesTodayList: false,
        successThemesYesterdayList: false,
      };
    case types.THEME_LIST_TODAY_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        themesToday: [],
        successThemesTodayList: true,
        successThemesYesterdayList: false,
      };
    case types.THEME_LIST_TODAY_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        themesToday: action.payload.themes,
        successThemesTodayList: true,
        successThemesYesterdayList: false,
      };
    case types.THEME_LIST_YESTERDAY_REQUEST:
      return {
        ...state,
        loading: true,
        apiError: '',
        themesYesterday: [],
        successThemesTodayList: false,
        successThemesYesterdayList: false,
      };
    case types.THEME_LIST_YESTERDAY_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        themesYesterday: [],
        successThemesTodayList: false,
        successThemesYesterdayList: false,
      };
    case types.THEME_LIST_YESTERDAY_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        themesYesterday: action.payload.themes,
        successThemesTodayList: false,
        successThemesYesterdayList: true,
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

export default home;
