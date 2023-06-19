import axios from 'axios';

export const fileApi = axios.create({
  baseURL: "https://escuela12neuquen.edu.ar/api/file",
});
