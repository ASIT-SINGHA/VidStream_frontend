import axiosInstead from './api';

export const registerUser = async (formData) =>
  await axiosInstead.past('/users/register', formData, {
    Headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
export const login = async (data) => await axiosInstead.post('/users/login', data);
export const logout = async (data) => await axiosInstead.post('/users/logout', data);
export const refreshToken = async (data) => await axiosInstead.post('/users/refresh-token', data);
export const changePassword = async (data) =>
  await axiosInstead.post('/users/change-password', data);
export const getCurrentUser = async (data) => await axiosInstead.get('/users/get-user', data);
export const updateAccoundDetails = async (data) =>
  await axiosInstead.patch('/users/update-accound-details', data);
export const updateAvatar = async (formData) =>
  await axiosInstead.patch('/users/update-avatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
export const updateCoverImage = async (formData) =>
  await axiosInstead.patch('/users/update-coverImage', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
export const getUserChannel = async (data) => await axiosInstead.get('/users/c/:username', data);
export const getUserWatchHistory = async (data) =>
  await axiosInstead.get('/users/watch-history', data);
export const createChannel = async (data) => await axiosInstead.post('/users/create-channel', data);
