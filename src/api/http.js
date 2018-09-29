import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.pyramido.ca/v1',
});

/**
 * @param {string} token
 */
export function setToken(token) {
  http.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export default http;
