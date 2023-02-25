import mainMarkerPin from './create-main-marker.js';
import map from './create-map.js';

const usualIconMarker = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

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
