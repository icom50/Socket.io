import axios from 'axios';

export let apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 900000,
  responseType: 'json',
//   withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  },
});