import axios from 'axios';

export const eventApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api/event",
});
