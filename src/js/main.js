import '../css/style.css';
import { markersList } from './map/edit-marker-list.js';
import { enableFilter } from './map/sorting.js';
import { runValidateForm } from './form/validate-form.js';
import { onFormSubmit } from './form/submit-form.js';
import { onFormReset } from './form/reset-form';
import { fetchRequest } from './api.js';
import { BOOKING_URL_DATA } from './constants.js';
import { onPhotoChange } from './loadImg/load-photo-of-housing';
import { onAvatarChange } from './loadImg/load-avatar.js';

const addMarkerOnMap = async () => {
  const adList = await fetchRequest(BOOKING_URL_DATA);
  markersList.add(adList);
  enableFilter(adList);
};

addMarkerOnMap();

onAvatarChange();
onPhotoChange();
runValidateForm();
onFormSubmit();
onFormReset();
