const api_key =
  'live_vxATxzZ9RoqZ86tp4QZ3XU7w8KZcPO7iT8k0l0xfJIpuGF7QNm4uQN6y9QdUDbTb';

export function fetchBreeds() {
  return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${api_key}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?api_key=${api_key}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
