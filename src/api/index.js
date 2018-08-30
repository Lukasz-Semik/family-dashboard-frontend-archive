import axios from 'axios';

const baseURL =
  process.env.PROCESS_ENV === 'production'
    ? 'https://family-dashboard-be.herokuapp.com'
    : 'http://localhost:8080';

export const api = axios.create({
  responseType: 'json',
  baseURL,
});

const clients = {
  default: {
    client: api,
  },
};

export default clients;
