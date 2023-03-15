import '../css/style.css';
import loadAvatar from './loadImg/load-avatar.js';
import markersList from './map/edit-marker-list.js';
import enableFilter from './map/sorting.js';
import runValidateForm from './form/validate-form.js';
import { onFormSubmit, onFormReset } from './form/submit-form.js';
import { fetchRequest } from './api.js';
import { BOOKING_URL_DATA } from './constants.js';

const inputFileAvatarFromBody = document.querySelector('#avatar');
inputFileAvatarFromBody.addEventListener('change', (evt) => {
  loadAvatar(evt);
});

runValidateForm();
onFormSubmit();
onFormReset();

const addMarkerOnMap = async () => {
  const adList = await fetchRequest(BOOKING_URL_DATA);
  markersList.add(adList);
  enableFilter(adList);
};

addMarkerOnMap();
