import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
// Intercept all requests
Api.interceptors.request.use(
  async request => {
    if (request.data) {
      console.log('request ', JSON.stringify(request.data));
    } else {
      console.log('request no data');
    }
    return request;
  },
  error => Promise.reject(error),
);
// Intercept all responses
Api.interceptors.response.use(
  async response => {
    console.log('response', response.data);
    return response;
  },
  error => {
    console.log(error, 'error API');
    let result = {
      status: 'E',
      message: `Error : ${error}`,
    };
    // alert(error);
    console.log(error);
    if (error === 'Error: Network Error') {
      result = {
        status: 'E',
        message: 'Error : Cek Koneksi Anda.',
      };
    };
    return Promise.reject(result);
  },
);

export default Api;
