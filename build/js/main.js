import uploadAvatar from './upload-avatar';
import markersList from './edit-marker-list';
import sortingAd from './sorting';
import runValidateForm from './validate-form';
import { fetchRequest } from './api';

uploadAvatar();
runValidateForm();

const BOOKING_URL_DATA =
  'https://28.javascript.pages.academy/keksobooking/data';

let adList = [];
fetchRequest(BOOKING_URL_DATA)
  .then((res) => {
    if (res) {
      adList = res;
      markersList.add(res);
    }
  })
  .catch((error) => {
    console.error('Произошла ошибка!', error.message);
  });

const formFiltersFromBody = document.querySelector('.map__filters');
formFiltersFromBody.addEventListener('change', () => {
  sortingAd(adList);
});
