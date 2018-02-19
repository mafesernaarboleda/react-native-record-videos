/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';
import themesApi from '../../api/themes';

export function setError(error) {
  return { type: types.SET_ERROR, error };
}

export function videosListRequest() {
  return { type: types.VIDEOS_LIST_REQUEST };
}

export function videosListRequestFail(error) {
  return { type: types.VIDEOS_LIST_REQUEST_FAIL, error };
}

export function videosListRequestSuccess(payload) {
  return { type: types.VIDEOS_LIST_REQUEST_SUCCESS, payload };
}

export function videosList(id) {
  return (dispatch) => {
    dispatch(videosListRequest());
    return themesApi
      .videosByTheme(id)
      .then((response) => response.json())
      .then((response) => {
        console.log('chingon', response);
        if (response.statusCode >= 400) {
          return dispatch(videosListRequestFail('Could not load videos'));
        } else {
          return dispatch(videosListRequestSuccess(response));
        }
      });
  };
}

export function videosVoteRequest() {
  return { type: types.VIDEOS_VOTE_REQUEST };
}

export function videosVoteRequestFail(error) {
  return { type: types.VIDEOS_VOTE_REQUEST_FAIL, error };
}

export function videosVoteRequestSuccess(payload) {
  return { type: types.VIDEOS_VOTE_REQUEST_SUCCESS, payload };
}

export function voteVideo(data) {
  return (dispatch) => {
    dispatch(videosListRequest());
    return themesApi
      .voteVideo(data)
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode >= 400) {
          return dispatch(videosVoteRequestFail('Could not vote video'));
        }
        return dispatch(videosVoteRequestSuccess(response));
      });
  };
}

export function videosUploadRequest() {
  return { type: types.VIDEOS_UPLOAD_REQUEST };
}

export function videosUploadRequestFail(error) {
  return { type: types.VIDEOS_UPLOAD_REQUEST_FAIL, error };
}

export function videosUploadRequestSuccess(payload) {
  return { type: types.VIDEOS_UPLOAD_REQUEST_SUCCESS, payload };
}

export function videoUpload(data) {
  const video = data.video;
  return (dispatch) => {
    dispatch(videosUploadRequest());
    return themesApi
      .uploadVideo(data.path)
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode >= 400) {
          return dispatch(videosUploadRequestFail('Could not upload video to s3'));
        } else {
          video.url = response.file.url;
          return themesApi
            .addVideoTheme(video, data.theme)
            .then((responseUpload) => responseUpload.json())
            .then((responseUpload) => {
              if (responseUpload.status >= 400) {
                return dispatch(videosUploadRequestFail('You can only upload one video per theme.'));
              }else{
                return dispatch(videosUploadRequestSuccess(responseUpload));
              }
            });
        }
      });
  };
}
