import axios from 'axios';
import useAuthStore from '../store/useAuthStore.js';

export const axiosInstead = axios.create({
  baseURL: import.meta.env.VITE_VIDSTREAM_API_URI || 'http://localhost:4000/api',
  withCredentials: true,
});

axiosInstead.interceptors.request.use((config) => {
  let token = useAuthStore.getState().accessToken;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstead;
