axios.defaults.headers.common["x-api-key"]="live_vxATxzZ9RoqZ86tp4QZ3XU7w8KZcPO7iT8k0l0xfJIpuGF7QNm4uQN6y9QdUDbTb",fetch("https://api.thecatapi.com/v1/breeds?api_key=live_vxATxzZ9RoqZ86tp4QZ3XU7w8KZcPO7iT8k0l0xfJIpuGF7QNm4uQN6y9QdUDbTb").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})),fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_vxATxzZ9RoqZ86tp4QZ3XU7w8KZcPO7iT8k0l0xfJIpuGF7QNm4uQN6y9QdUDbTb&breed_ids=${"abys"}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}));document.querySelector(".breed-select"),document.querySelector(".cat-info"),document.querySelector(".loader"),document.querySelector(".error");
//# sourceMappingURL=index.f8fd3b2c.js.map
