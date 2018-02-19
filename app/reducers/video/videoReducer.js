/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';

const initialState = {
  loading: false,
  videosListById: [],
  apiError: '',
  successVideoList: false,
  successVideoVote: false,
  successUploadVideo: false,
};

const video = (state = initialState, action) => {
  switch (action.type) {
    case types.VIDEOS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        apiError: '',
      };
    case types.VIDEOS_LIST_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        videosListById: [],
        successVideoList: false,
      };
    case types.VIDEOS_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        videosListById: action.payload.videos,
        successVideoList: true,
      };
    case types.SET_ERROR:
      return {
        ...state,
        apiError: action.error,
      };
    case types.VIDEOS_VOTE_REQUEST:
      return {
        ...state,
        loading: true,
        apiError: '',
      };
    case types.VIDEOS_VOTE_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        successVideoVote: false,
      };
    case types.VIDEOS_VOTE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        successVideoVote: true,
      };
    case types.VIDEOS_UPLOAD_REQUEST:
      return {
        ...state,
        loading: true,
        apiError: '',
      };
    case types.VIDEOS_UPLOAD_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        successUploadVideo: false,
      };
    case types.VIDEOS_UPLOAD_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        successUploadVideo: true,
      };
    default:
      return state;
  }
};

export default video;
