import {
  COORDINATES_CENTER_MAP,
  INITIAL_ZOOM_MAP,
  URL_OPEN_STREET_MAP,
} from '../constants.js';
import { map, tileLayer } from 'leaflet';

const mapCity = map('map-canvas').setView(
  {
    lat: COORDINATES_CENTER_MAP.lat,
    lng: COORDINATES_CENTER_MAP.lng,
  },
  INITIAL_ZOOM_MAP
);

tileLayer(URL_OPEN_STREET_MAP, {}).addTo(mapCity);

export default mapCity;
