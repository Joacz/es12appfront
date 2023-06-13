import axios from 'axios';

export const publicationApi = axios.create({
  baseURL: "https://escuela12neuquen.edu.ar/api/publication",
});
