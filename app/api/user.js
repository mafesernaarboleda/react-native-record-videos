/**
 * @author Maria Fernanda Serna
 */

import baseUrl from '../config/baseurl';
import { AsyncStorage } from 'react-native';

const token = await AsyncStorage.getItem('token');

const login = (user) => (fetch(`${baseUrl.backend}/login`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
  },
  body: JSON.stringify(user),
}));

const register = (user) => (fetch(`${baseUrl.backend}/signup`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
  },
  body: JSON.stringify(user),
}));

const getProfile = () => {
  return fetch(`${baseUrl.backend}/profile`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: token,
        }
      });
};


const updateProfile = (data) => {
  return fetch(`${baseUrl.backend}/profile`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(data),
      });
};

export default {
  login,
  register,
  getProfile,
  updateProfile,
};
