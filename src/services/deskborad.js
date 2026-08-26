import axiosInstead from './api';

export const getChannelStat = async (data) => await axiosInstead.get(`dashboards/stats`, data);
export const getChannelvideo = async (data) => await axiosInstead.get(`dashboards/videos`, data);
