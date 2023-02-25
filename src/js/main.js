import loadAvatar from './load-avatar.js';
import markersList from './edit-marker-list.js';
import sortingAd from './sorting.js';
import runValidateForm from './validate-form.js';
import { fetchRequest } from './api.js';
import { onFormSubmit } from './submit-form.js';

const inputFileAvatarFromBody = document.querySelector('#avatar');
inputFileAvatarFromBody.addEventListener('change', (evt) => {
  loadAvatar(evt);
});

onFormSubmit();
runValidateForm();

const BOOKING_URL_DATA =
  'https://23.javascript.pages.academy/keksobooking/data';

const getAdList = async () => {
  const adList = await fetchRequest(BOOKING_URL_DATA);
  markersList.add(adList);

  const formFiltersFromBody = document.querySelector('.map__filters');
  formFiltersFromBody.addEventListener('change', () => {
    sortingAd(adList);
  });
};

getAdList();
