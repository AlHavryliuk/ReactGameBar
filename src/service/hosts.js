import axios from 'axios';
import { apiData } from 'configuration/config';

const { VORTEX_URL } = apiData;

export const $publicHost = axios.create({
  baseURL: VORTEX_URL,
});

export const $privateHost = axios.create({
  baseURL: VORTEX_URL,
});

// $privateHost.interceptors.response.use(
//   response => response,
//   error => {
//     console.log(error.response);
//     return Promise.reject(error);
//   }
// );

export const token = {
  get: () => $privateHost.defaults.headers.common.Authorization,
  set: token => {
    $privateHost.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet: () => {
    $privateHost.defaults.headers.common.Authorization = ``;
  },
};
