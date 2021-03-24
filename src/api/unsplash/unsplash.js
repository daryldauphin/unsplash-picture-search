import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID JpOcOHJhMGvQES2tIaoqaGAYwtN36LS7_BnnWP4HVTg'
    }
});