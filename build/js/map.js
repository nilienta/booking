const COORDINATES_CENTER_MAP = {
  X: 35.67,
  Y: 139.76,
};

const INITIAL_ZOOM_MAP = 13;

export const map = L.map("map-canvas").setView(
  {
    lat: COORDINATES_CENTER_MAP.X,
    lng: COORDINATES_CENTER_MAP.Y,
  },
  INITIAL_ZOOM_MAP
);

const layerMap = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {}
).addTo(map);

const mainIconPin = L.icon({
  iconUrl: "../img/main-pin.svg",
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarkerPin = L.marker(
  {
    lat: COORDINATES_CENTER_MAP.X,
    lng: COORDINATES_CENTER_MAP.Y,
  },
  {
    draggable: true,
    icon: mainIconPin,
  }
);
mainMarkerPin.addTo(map);

export const usualIconMarker = L.icon({
  iconUrl: "../img/pin.svg",
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

mainMarkerPin.on("moveend", (e) => {
  getCoordinatesFromMap(e);
});

const getCoordinatesFromMap = (e) => {
  const inputAddressFromBody = document.querySelector("#address");
  inputAddressFromBody.value = e.target
    .getLatLng()
    .toString()
    .replace(/[a-zA-Z()]/g, "");
};
