// ---------------------------------------------create map------------------------------------------------
// TODO разделить код
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

const usualIconMarker = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

// -------------------------------------create main marker on map-----------------------------------------
const mainIconPin = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarkerPin = L.marker(
  {
    lat: COORDINATES_CENTER_MAP.lat,
    lng: COORDINATES_CENTER_MAP.lng,
  },
  {
    draggable: true,
    icon: mainIconPin,
  }
);

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
