import axios from 'axios';

export const apiServices = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_DOMAIN,
  headers: {
    common: {},
    // "Content-Type": "application/json",
    'Accept-Language': 'en-EN',
    token: 'Bearer ' + localStorage.getItem('access_token')
  },
});

console.log('process.env.REACT_APP_API_DOMAIN ', process.env.REACT_APP_API_DOMAIN)

apiServices.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

apiServices.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    if (error?.response) {
      return Promise.resolve(error?.response);
    }

    return Promise.reject(error);
  },
);