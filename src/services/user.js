import axiosInstead from './api';

export const registerUser = async (formData) => {
  const dataToSend = new FormData();

  dataToSend.append('fullName', formData.fullName);
  dataToSend.append('username', formData.username);
  dataToSend.append('email', formData.email);
  dataToSend.append('password', formData.password);

  if (formData.avatar?.length > 0) {
    dataToSend.append('avatar', formData.avatar[0]);
  }

  if (formData.coverImage?.length > 0) {
    dataToSend.append('coverImage', formData.coverImage[0]);
  }
  try {
    const res = await axiosInstead.post('/users/register', dataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const loginUser = async (formData) => {
  const dataToSend = new FormData();
  dataToSend.append('email', formData.email);
  dataToSend.append('password', formData.password);
  try {
    const res = await axiosInstead.post('/users/login', dataToSend);
    console.log(res.data);
    
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};
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
