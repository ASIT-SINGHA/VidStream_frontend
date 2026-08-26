import axiosInstead from './api';

export const CreatePlaylist = async (data) => await axiosInstead.post('/playLists/', data);
export const getPlaylist = async (playlistId) => await axiosInstead.get(`/playLists/${playlistId}`);
export const updatePlaylist = async (playlistId) =>
  await axiosInstead.patch(`/playLists/${playlistId}`);
export const deletePlaylist = async (playlistId) =>
  await axiosInstead.delete(`/playLists/${playlistId}`);
export const addVideoToPlaylist = async (playlistId, videoId) =>
  await axiosInstead.patch(`/playLists/add/${videoId}/${playlistId}`);
export const removeVideoFromPlaylist = async (playlistId, videoId) =>
  await axiosInstead.patch(`/playLists/remove/${videoId}/${playlistId}`);
export const getPlaylistForUser = async (userId) =>
  await axiosInstead.get(`/playLists/uesr/${userId}`);
