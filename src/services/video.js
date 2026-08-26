import axiosInstead from './api';

export const searchVideo = async (params) => await axiosInstead.get('/videos/search', { params });
export const getAllVideo = async (params) => await axiosInstead.get('/videos/', { params });
export const uploadAVideo = async (formData) =>
  await axiosInstead.post('/videos/', formData, {
    headers: {
      'Content-type': 'multipart/data',
    },
  });
export const getVideoById = async (videoId) => await axiosInstead.get(`/videos/${videoId}`);
export const updateVideo = async (videoId, formData) =>
  await axiosInstead.patch(`/videos/${videoId}`, formData, {
    headers: {
      'Content-Type': 'mulitpart/data',
    },
  });
export const deleteVideo = async (videoId) => await axiosInstead.delete(`/videos/${videoId}`);
export const togglePublishVideo = async (videoId) =>
  await axiosInstead.patch(`/videos/toggle-video/${videoId}`);
