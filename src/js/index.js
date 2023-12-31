import { fetchCats, fetchCatBreed } from './cat-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import '../css/styles.css';

const selector = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

selector.addEventListener('change', onSelect);

loader.classList.remove('is-hidden');

let arrBreeds = [];
fetchCats()
  .then(data => {
    data.forEach(element => {
      arrBreeds.push({ text: element.name, value: element.id });
    });
    new SlimSelect({
      select: selector,
      data: [{ text: 'None', value: 'none' }, ...arrBreeds],
    });

    loader.classList.add('is-hidden');
    selector.classList.remove('is-hidden');
  })
  .catch(onCatchError);

function onSelect(event) {
  const breedId = event.currentTarget.value;
  if (breedId === 'none') {
    catInfoEl.innerHTML = '';
    return;
  }
  loader.classList.replace('is-hidden', 'loader');
  selector.classList.add('is-hidden');
  catInfoEl.classList.add('is-hidden');

  fetchCatBreed(breedId)
    .then(data => {
      loader.classList.replace('loader', 'is-hidden');
      selector.classList.remove('is-hidden');
      const { url, breeds } = data[0];

      catInfoEl.innerHTML = `<div class="cat-info__img">
      <img src="${url}" alt="${breeds[0].name}" width="600"/>
      </div>
      <div class="cat-info__desc">
      <h1>${breeds[0].name}</h1>
      <h2>Description:</h2>
      <p>${breeds[0].description}</p>
      <h2>Temperament:</h2>
      <p>${breeds[0].temperament}</p>
      </div>`;
      catInfoEl.classList.remove('is-hidden');
    })
    .catch(error => {
      console.log(error);
      onCatchError();
      selector.classList.remove('is-hidden');
    });
}

function onCatchError() {
  loader.classList.replace('loader', 'is-hidden');

  Notify.failure(
    'Oops! Something went wrong! Try reloading the page or select another cat breed!',
    {
      position: 'center-center',
      timeout: 3000,
      width: '400px',
      fontSize: '16px',
    }
  );
}
