import axios from 'axios';
const Basic_URL = `https://youtube.googleapis.com/youtube/v3/`;

const instance = axios.create({
   baseURL: `${Basic_URL}`
});

export default instance;