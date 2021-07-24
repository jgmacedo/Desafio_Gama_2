import axios from 'axios';

const api = axios.create({
    baseURL: 'https://raw.githubusercontent.com/jgmacedo/Archives/main/produtos.json'
    
})

export default api;
