import axios from 'axios';

export const eventApi = axios.create({
  baseURL: "https://escuela12neuquen.edu.ar/api/event",
});
