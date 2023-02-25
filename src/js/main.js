import loadAvatar from './load-avatar.js';
import markersList from './edit-marker-list.js';
import sortingAd from './sorting.js';
import runValidateForm from './validate-form.js';
import { fetchRequest } from './api.js';
import showToast from './toast.js';
import { onFormSubmit } from './submit-form.js';

const inputFileAvatarFromBody = document.querySelector('#avatar');
inputFileAvatarFromBody.addEventListener('change', (evt) => {
  loadAvatar(evt);
});
onFormSubmit();
runValidateForm();

const BOOKING_URL_DATA =
  'https://23.javascript.pages.academy/keksobooking/data';

let adList = [];
fetchRequest(BOOKING_URL_DATA)
  .then((res) => {
    if (res) {
      adList = res;
      markersList.add(res);
    }
  })
  .catch((error) => {
    showToast('Произошла ошибка!', error.message);
  });

const formFiltersFromBody = document.querySelector('.map__filters');
formFiltersFromBody.addEventListener('change', () => {
  sortingAd(adList);
});
