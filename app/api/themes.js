/**
 * @author Maria Fernanda Serna
 */

import baseUrl from '../config/baseurl';
import RNFetchBlob from 'react-native-fetch-blob';
import { AsyncStorage } from 'react-native';

const themesList = (date) => {
  return fetch(`${baseUrl.backend}/themes/${date}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: await AsyncStorage.getItem('token'),
        }
      });
};

const videosByTheme = (id) => {
  return fetch(`${baseUrl.backend}/themes/${id}/videos`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: await AsyncStorage.getItem('token'),
        }
      });
};

const uploadVideo = (path) => {
  return RNFetchBlob.fetch('POST', `${baseUrl.backend}/upload`, {
        Authorization: await AsyncStorage.getItem('token'),
        'Content-Type': 'multipart/form-data',
      }, [
        {
          name: 'file',
          filename: 'mp4',
          data: RNFetchBlob.wrap(path),
        },
      ]);
};

const addVideoTheme = (data, theme) => {
  return fetch(`${baseUrl.backend}/themes/${theme}/addVideo`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: await AsyncStorage.getItem('token'),
        },
        body: JSON.stringify({ title: data.title, description: data.description, url: data.url }),
      });
};

const voteVideo = (data) => {
  return fetch(`${baseUrl.backend}/theme/${data.idTheme}/video/${data.idVideo}/vote`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({ vote: data.vote }),
      });
};

const themesScores = (date) => {
  return fetch(`${baseUrl.backend}/themes/${date}/scores`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: token,
        }
      });
};


const themesRankings = (date) => {
  return fetch(`${baseUrl.backend}/themes/${date}/rankings`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: token,
        }
      });
};

export default {
  themesList,
  videosByTheme,
  voteVideo,
  uploadVideo,
  addVideoTheme,
  themesRankings,
  themesScores,
};
