import axios from 'axios';

import firebase from '../configs/firebase';

const instance = axios.create({ baseURL: 'http://localhost:7001/api' });

instance.interceptors.request.use(
  async config => {
    const token = await firebase.auth().currentUser.getIdToken(false);
    config.headers['Authorization'] = 'Bearer ' + token;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
