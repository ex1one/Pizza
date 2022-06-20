import axios from 'axios';

const instance = axios.create({
  // withCredentials: true,
  baseURL: process.env.BASE_URL,
});

// instance.interceptors.request.use((config) => {
//   config.headers.Authorization = Cookies.get('token');
// });

export default instance;
