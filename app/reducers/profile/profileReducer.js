/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';

const initialState = {
  loading: false,
  themesScoresList: [],
  themesRankingsList: [],
  apiError: '',
  successThemesScores: false,
  successThemesRankings: false,
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case types.THEME_SCORES_REQUEST:
      return {
        ...state,
        loading: true,
        apiError: '',
        themesScoresList: [],
        successThemesScores: false,
      };
    case types.THEME_SCORES_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        themesScoresList: [],
        successThemesScores: false,
      };
    case types.THEME_SCORES_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        themesScoresList: action.payload.scores,
        successThemesScores: true,
      };
    case types.THEME_RANKINGS_REQUEST:
      return {
        ...state,
        loading: true,
        apiError: '',
        themesRankingsList: [],
        successThemesRankings: false,
      };
    case types.THEME_RANKINGS_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        themesRankingsList: [],
        successThemesRankings: false,
      };
    case types.THEME_RANKINGS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        themesRankingsList: action.payload.rankings,
        successThemesRankings: true,
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

export default profile;
