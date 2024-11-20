import axios from 'axios';

import { tasks } from './tasks';

axios.defaults.baseURL = '/api';

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    const message = error instanceof Error ? error.message : String(error);

    return Promise.reject(new Error(message));
  },
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const message = error instanceof Error ? error.message : String(error);

    return Promise.reject(new Error(message));
  },
);

export const api = { tasks };
