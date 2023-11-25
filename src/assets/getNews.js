import axios from "axios";

const BASE_URL = axios.defaults.baseURL = 'https://your-pet-server.onrender.com'

export const getNews = async () => {
    const resp = await axios(`${BASE_URL}/api/news/`);
    return resp.data;
}
