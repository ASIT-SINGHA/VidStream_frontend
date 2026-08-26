import axiosInstead from './api';

export const createTweet = async (data) => await axiosInstead.post(`/tweets/`, data);
export const getTweet = async (userId) => await axiosInstead.get(`/tweets/user/${userId}`);
export const updateTweet = async (tweetId) => await axiosInstead.patch(`/tweets/${tweetId}`);
export const deleteTweet = async (tweetId) => await axiosInstead.delete(`/tweets/${tweetId}`);
