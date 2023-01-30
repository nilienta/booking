import supplePopup from "./supply-element.js";

const map = L.map("map-canvas").setView(
  {
    lat: 35.67,
    lng: 139.76,
  },
  13
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
    lat: 35.67,
    lng: 139.76,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

const addressCurrent = document.querySelector("#address");
mainPinMarker.on("moveend", (e) => {
  addressCurrent.value = e.target
    .getLatLng()
    .toString()
    .replace(/[a-zA-Z()]/g, "");
});

mainPinMarker.addTo(map);

export { map, createMarker, cleanMapMarker };
