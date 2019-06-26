import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 487738f561942a84b8cf033662611ab775d548af000c38a9adfe006c0ec57065'
    }
});