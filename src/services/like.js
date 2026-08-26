import axiosInstead from './api';

export const toggleLikeVideo = async (videoId) =>
  await axiosInstead.post(`/likes/toggle/v/${videoId}`);
export const toggleLikeComment = async (commentId) =>
  await axiosInstead.post(`/likes/toggle/c/${commentId}`);
export const toggleLikeTweet = async (tweetId) =>
  await axiosInstead.post(`/likes/toggle/t/${tweetId}`);
export const getAllLikedVideos = async () => await axiosInstead.get(`/likes/`);
