import axios from 'axios';

export const eventApi = axios.create({
  baseURL: "/api/event",
});
