const COORDINATES_CENTER_MAP = {
  lat: 35.67,
  lng: 139.76,
};

const INITIAL_ZOOM_MAP = 13;

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
