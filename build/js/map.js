import { supply } from "./supply-element.js";

const map = L.map("map-canvas").setView(
  {
    lat: 54.710162,
    lng: 20.510137,
  },
  11
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

supply.forEach((item) => {
  const pinMarker = L.marker(
    {
      lat: item.location.x,
      lng: item.location.y,
    },
    {
      icon: pinMarkerIcon,
    }
  );
  pinMarker.addTo(map);
});

const mainPinIcon = L.icon({
  iconUrl: "../img/main-pin.svg",
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 54.70624,
    lng: 20.51047,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

mainPinMarker.on("moveend", (e) => {
  console.log(e.target.getLatLng());
});

mainPinMarker.addTo(map);
