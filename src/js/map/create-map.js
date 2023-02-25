import { COORDINATES_CENTER_MAP, INITIAL_ZOOM_MAP } from '../constants.js';

const map = L.map('map-canvas').setView(
  {
    lat: COORDINATES_CENTER_MAP.lat,
    lng: COORDINATES_CENTER_MAP.lng,
  },
  INITIAL_ZOOM_MAP
);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(
  map
);

export default map;
