import { icon, marker } from 'leaflet';

import { COORDINATES_CENTER_MAP, ICON_SIZE } from '../constants.js';
import mainIcon from '../../img/main-pin.svg';

const mainIconPin = icon({ ...ICON_SIZE, iconUrl: mainIcon });

export const mainMarkerPin = marker(
  {
    lat: COORDINATES_CENTER_MAP.lat,
    lng: COORDINATES_CENTER_MAP.lng,
  },
  {
    draggable: true,
    icon: mainIconPin,
  }
);
