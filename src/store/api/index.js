import axios from 'axios';

const clients = {
  default: {
    client: axios.create({
      baseURL: 'http://localhost:8080',
      responseType: 'json',
    }),
  },
};

export default clients;
