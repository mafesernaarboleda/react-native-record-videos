/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';
import themesApi from '../../api/themes';
import moment from 'moment';

export function themesListRequest() {
  return { type: types.THEME_LIST_REQUEST };
}

export function themesListRequestFail(error) {
  return { type: types.THEME_LIST_REQUEST_FAIL, error };
}

export function setError(error) {
  return { type: types.SET_ERROR, error };
}

export function themesListRequestSuccess(payload) {
  return { type: types.THEME_LIST_REQUEST_SUCCESS, payload };
}

export function themesList(date) {
  return (dispatch) => {
    dispatch(themesListRequest());
    return themesApi
      .themesList(date)
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode >= 400) {
          return dispatch(themesListRequestFail('Could not load themes'));
        } else {
          return dispatch(themesListRequestSuccess(response));
        }
      });
  };
}

export function themesListTodayRequest() {
  return { type: types.THEME_LIST_TODAY_REQUEST };
}

export function themesListTodayRequestFail(error) {
  return { type: types.THEME_LIST_TODAY_REQUEST_FAIL, error };
}


export function themesListTodayRequestSuccess(payload) {
  return { type: types.THEME_LIST_TODAY_REQUEST_SUCCESS, payload };
}

export function themesTodayList() {
  return (dispatch) => {
    dispatch(themesListTodayRequest());
    return themesApi
      .themesList(moment(new Date()).format('MM-DD-YYYY'))
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode >= 400) {
          return dispatch(themesListTodayRequestFail('Could not load themes'));
        } else {
          return dispatch(themesListTodayRequestSuccess(response));
        }
      });
  };
}

export function themesListYesterdayRequest() {
  return { type: types.THEME_LIST_YESTERDAY_REQUEST };
}

export function themesListYesterdayRequestFail(error) {
  return { type: types.THEME_LIST_YESTERDAY_REQUEST_FAIL, error };
}

export function themesListYesterdayRequestSuccess(payload) {
  return { type: types.THEME_LIST_YESTERDAY_REQUEST_SUCCESS, payload };
}

export function themesYesterdayList() {
  return (dispatch) => {
    dispatch(themesListYesterdayRequest());
    return themesApi
      .themesList(moment(new Date()).subtract(1, 'days').startOf('day').format('MM-DD-YYYY'))
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode >= 400) {
          return dispatch(themesListYesterdayRequestFail('Could not load themes'));
        } else {
          return dispatch(themesListYesterdayRequestSuccess(response));
        }
      });
  };
}
