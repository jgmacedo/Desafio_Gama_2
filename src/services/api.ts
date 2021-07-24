import axios from 'axios';

const api = axios.create({
    baseURL: 'https://github.com/jgmacedo/Archives/blob/main/produtos.json'
})

export default api;
