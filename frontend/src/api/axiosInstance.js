import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:"",//backend url,
    headers:{'content-type':'app/json'}
});

export default axiosInstance;