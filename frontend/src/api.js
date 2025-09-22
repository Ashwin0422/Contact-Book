import axios from 'axios';

const API_URL =  'https://contact-book-1-dem9.onrender.com';

const api = axios.create({
    baseURL: API_URL,
});

export default api;
