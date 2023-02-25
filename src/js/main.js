import loadAvatar from './loadImg/load-avatar.js';
import markersList from './map/edit-marker-list.js';
import sortingAd from './map/sorting.js';
import runValidateForm from './form/validate-form.js';
import { onFormSubmit } from './form/submit-form.js';
import { fetchRequest } from './api.js';
import { BOOKING_URL_DATA } from './constants.js';

const inputFileAvatarFromBody = document.querySelector('#avatar');
inputFileAvatarFromBody.addEventListener('change', (evt) => {
  loadAvatar(evt);
});

onFormSubmit();
runValidateForm();

const getAdList = async () => {
  const adList = await fetchRequest(BOOKING_URL_DATA);
  markersList.add(adList);

  const formFiltersFromBody = document.querySelector('.map__filters');
  formFiltersFromBody.addEventListener('change', () => {
    sortingAd(adList);
  });
};

getAdList();
