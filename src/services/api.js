import axios from "axios";
import useAuthStore from "../store/useAuthStore.js"

export const axiosInstead = axios.create({
   baseURL:import.meta.env.VIDSTREAM_API_URI.VIDSTREAM_API_URI || "http://localhost:4000/api",
   withCredentials:true
})

axiosInstead.interceptors.request.use(()=>{
    let token = useAuthStore((state)=>state.accessToken)
    if(token)  config.headers.Authorization = `Bearer ${token}`
    return config;
})

export default axiosInstead;