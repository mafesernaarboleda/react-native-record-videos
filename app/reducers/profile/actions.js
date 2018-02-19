/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';
import themesApi from '../../api/themes';
import moment from 'moment';

export function themesScoresRequest() {
  return { type: types.THEME_SCORES_REQUEST };
}

export function themesScoresRequestFail(error) {
  return { type: types.THEME_SCORES_REQUEST_FAIL, error };
}

export function themesScoresRequestSuccess(payload) {
  return { type: types.THEME_SCORES_REQUEST_SUCCESS, payload };
}

export function themesScores() {
  return (dispatch) => {
    dispatch(themesScoresRequest());
    return themesApi
      .themesScores(moment(new Date()).format('MM-DD-YYYY'))
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode >= 400) {
          return dispatch(themesScoresRequestFail('Could not load themes'));
        } else {
          return dispatch(themesScoresRequestSuccess(response));
        }
      });
  };
}


export function themesRankingsRequest() {
  return { type: types.THEME_RANKINGS_REQUEST };
}

export function themesRankingsRequestFail(error) {
  return { type: types.THEME_RANKINGS_REQUEST_FAIL, error };
}

export function themesRankingsRequestSuccess(payload) {
  return { type: types.THEME_RANKINGS_REQUEST_SUCCESS, payload };
}

export function themesRankings() {
  return (dispatch) => {
    dispatch(themesRankingsRequest());
    return themesApi
      .themesRankings(moment(new Date()).format('MM-DD-YYYY'))
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode >= 400) {
          return dispatch(themesRankingsRequestFail('Could not load themes'));
        } else {
          return dispatch(themesRankingsRequestSuccess(response));
        }
      });
  };
}

