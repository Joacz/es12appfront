import axios from 'axios';

export const publicationApi = axios.create({
  baseURL: "http://api.escuela12neuquen.edu.ar/api/publication",
});
