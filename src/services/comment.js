import axiosInstead from './api';

export const getCommand = async (videoId) => axiosInstead.get(`comments/${videoId}`);
export const addCommand = async (videoId) => axiosInstead.post(`comments/${videoId}`);
export const deleteCommand = async (commentId) => axiosInstead.delete(`comments/c/${commentId}`);
export const updateCommand = async (commentId) => axiosInstead.patch(`comments/c/${commentId}`);
