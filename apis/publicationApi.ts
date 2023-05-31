import axios from 'axios';

export const publicationApi = axios.create({
  baseURL: "/api/publication",
});
