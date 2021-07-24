import axios from 'axios';

const api = axios.create({
    baseURL: 'localstorage:8888/produtos'
    
})

export default api;
