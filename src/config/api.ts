import axios from 'axios';

const api = axios.create({
    baseURL: 'https://memorizei-app-8af249df138b.herokuapp.com/'
})

export default api;