import { icon } from 'leaflet';

import { mainMarkerPin } from './create-main-marker.js';
import { mapCity } from './create-map.js';
import { ICON_SIZE } from '../constants.js';
import usualIcon from '../../img/pin.svg';

export const usualIconMarker = icon({ ...ICON_SIZE, iconUrl: usualIcon });

const getCoordinatesFromMap = (err) => {
  const inputAddressFromBody = document.querySelector('#address');
  inputAddressFromBody.value = err.target
    .getLatLng()
    .toString()
    .replace(/[a-zA-Z()]/g, '');
};

mainMarkerPin.addTo(mapCity);
mainMarkerPin.on('moveend', (err) => {
  getCoordinatesFromMap(err);
});
