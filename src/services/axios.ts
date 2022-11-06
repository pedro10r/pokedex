import axios from 'axios';

const axios_api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})

console.info(axios_api);
export { axios_api };