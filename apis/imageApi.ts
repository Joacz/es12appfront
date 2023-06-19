import axios from 'axios';

export const imageApi = axios.create({
  baseURL: "https://escuela12neuquen.edu.ar/api/image",
});
