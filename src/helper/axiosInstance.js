import axios from 'axios';
import { getToken } from './FormHHelper';
const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    // baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Authorization': `${getToken()}`,
    },
});

export default instance;