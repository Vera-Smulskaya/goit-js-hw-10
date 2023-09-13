import { fetchBreeds, fetchCatByBreed } from './cat-api';
// import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] =
//   'live_vxATxzZ9RoqZ86tp4QZ3XU7w8KZcPO7iT8k0l0xfJIpuGF7QNm4uQN6y9QdUDbTb';

fetchBreeds();
fetchCatByBreed('abys');

const selector = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
