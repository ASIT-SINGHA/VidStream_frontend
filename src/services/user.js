import axiosInstead from './api';

export const registerUser = (formData) =>
  axiosInstead.past('/users/register', formData, {
    Headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
export const login = (data) => axiosInstead.post('/users/login', data);
export const logout = (data) => axiosInstead.post('/users/logout', data);
export const refreshToken = (data) => axiosInstead.post('/users/refresh-token', data);
export const changePassword = (data) => axiosInstead.post('/users/change-password', data);
export const getCurrentUser = (data) => axiosInstead.get('/users/get-user', data);
export const updateAccoundDetails = (data) =>
  axiosInstead.patch('/users/update-accound-details', data);
export const updateAvatar = (formData) =>
  axiosInstead.patch('/users/update-avatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
export const updateCoverImage = (formData) =>
  axiosInstead.patch('/users/update-coverImage', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
export const getUserChannel = (data) => axiosInstead.get('/users/c/:username', data);
export const getUserWatchHistory = (data) => axiosInstead.get('/users/watch-history', data);
export const createChannel = (data) => axiosInstead.post('/users/create-channel', data);
