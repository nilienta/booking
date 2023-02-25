import { COORDINATES_CENTER_MAP, ICON_SIZE } from '../constants.js';

const mainIconPin = L.icon({ ...ICON_SIZE, iconUrl: '../img/main-pin.svg' });

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
