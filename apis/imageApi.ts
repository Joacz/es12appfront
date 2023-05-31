import axios from 'axios';

export const imageApi = axios.create({
  baseURL: "/api/image/",
});
