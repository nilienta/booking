import loadAvatar from './load-avatar';
import markersList from './edit-marker-list';
import sortingAd from './sorting';
import runValidateForm from './validate-form';
import { fetchRequest } from './api';
import showToast from './toast';
import { onFormSubmit } from './submit-form';

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
