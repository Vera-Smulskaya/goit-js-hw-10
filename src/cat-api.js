const api_key =
  'live_vxATxzZ9RoqZ86tp4QZ3XU7w8KZcPO7iT8k0l0xfJIpuGF7QNm4uQN6y9QdUDbTb';
const BASE_URL = 'https://api.thecatapi.com/v1/';

export function fetchCats() {
  return fetch(`${BASE_URL}breeds?api_key=${api_key}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

export function fetchCatBreed(breedId) {
  return fetch(
    `${BASE_URL}images/search?api_key=${api_key}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
