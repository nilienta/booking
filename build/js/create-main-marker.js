const COORDINATES_CENTER_MAP = {
  lat: 35.67,
  lng: 139.76,
};

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

export default mainMarkerPin;
