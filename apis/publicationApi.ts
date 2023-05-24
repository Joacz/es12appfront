import axios from 'axios';

export const publicationApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api/publication",
});
