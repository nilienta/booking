import supplePopup from "./supply-element.js";

const coordinatesCenterMap = {
  X: 35.67,
  Y: 139.76,
};
const initialZoomMap = 13;

const map = L.map("map-canvas").setView(
  {
    lat: coordinatesCenterMap.X,
    lng: coordinatesCenterMap.Y,
  },
  initialZoomMap
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const pinMarkerIcon = L.icon({
  iconUrl: "../img/pin.svg",
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const currentMarker = [];

const cleanMapMarker = () => {
  currentMarker.forEach((item) => {
    map.removeLayer(item);
  });
};

const createMarker = (dataArr) => {
  dataArr.forEach((item) => {
    const pinMarker = L.marker(
      {
        lat: item.location.lat,
        lng: item.location.lng,
      },
      {
        icon: pinMarkerIcon,
      }
    );
    currentMarker.push(pinMarker);
    pinMarker.addTo(map).bindPopup(supplePopup(item), {
      keepInView: true,
    });
  });
};

const mainPinIcon = L.icon({
  iconUrl: "../img/main-pin.svg",
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: coordinatesCenterMap.X,
    lng: coordinatesCenterMap.Y,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

const formCurrentAddress = document.querySelector("#address");
mainPinMarker.on("moveend", (e) => {
  formCurrentAddress.value = e.target
    .getLatLng()
    .toString()
    .replace(/[a-zA-Z()]/g, "");
});

mainPinMarker.addTo(map);

export { map, createMarker, cleanMapMarker };
