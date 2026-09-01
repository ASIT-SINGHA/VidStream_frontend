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
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const logoutUser = async (data) => {
  try {
    await axiosInstead.post('/users/logout', data);
  } catch (error) {
    throw new Error(error);
  }
};

export const refreshToken = async (data) => await axiosInstead.post('/users/refresh-token', data);

export const changePassword = async (data) =>
  await axiosInstead.post('/users/change-password', data);

export const getCurrentUser = async (data) => await axiosInstead.get('/users/get-user', data);

export const updateAccoundDetailsService = async (data) => {
  const dataToSend = new FormData();
  dataToSend.append('fullName', data.fullName);
  dataToSend.append('email', data.email);
  try {
    const res = await axiosInstead.patch('/users/update-accound-details', dataToSend);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateAvatar = async (formData) => {
  const dataToSend = new FormData();
  if (formData.avatar?.length > 0) {
    dataToSend.append('avatar', formData.avatar[0]);
  }
  try {
    const res = await axiosInstead.patch('/users/update-avatar', dataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateCoverImage = async (formData) => {
  const dataToSend = new FormData();
  if (formData.coverImage?.length > 0) {
    dataToSend.append('coverImage', formData.coverImage[0]);
  }
  try {
    const res = await axiosInstead.patch('/users/update-coverImage', dataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getUserChannel = async (data) => await axiosInstead.get('/users/c/:username', data);

export const getUserWatchHistory = async (data) =>
  await axiosInstead.get('/users/watch-history', data);

export const createChannel = async (data) => await axiosInstead.post('/users/create-channel', data);
