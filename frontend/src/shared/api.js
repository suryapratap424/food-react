import axios from 'axios';

export function getAllItems() {
  return axios.get('http://localhost:3001/api');
}
