import axios from 'axios';

export const imageApi = axios.create({
  baseURL: "http://api.escuela12neuquen.edu.ar/api/image/",
});
