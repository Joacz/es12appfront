import axios from 'axios';

export const eventApi = axios.create({
  baseURL: "http://api.escuela12neuquen.edu.ar/api/event",
});
