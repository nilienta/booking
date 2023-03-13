import mainMarkerPin from './create-main-marker.js';
import map from './create-map.js';
import { ICON_SIZE } from '../constants.js';
import { icon } from 'leaflet';
import usualIcon from '../../img/pin.svg';

const usualIconMarker = icon({ ...ICON_SIZE, iconUrl: usualIcon });

const getCoordinatesFromMap = (err) => {
  const inputAddressFromBody = document.querySelector('#address');
  inputAddressFromBody.value = err.target
    .getLatLng()
    .toString()
    .replace(/[a-zA-Z()]/g, '');
};

mainMarkerPin.addTo(map);
mainMarkerPin.on('moveend', (err) => {
  getCoordinatesFromMap(err);
});

export { map, usualIconMarker };
