import createPopupAd from "./supply-element.js";

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

// TODO: понять что тут происходит и дать название
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const createIconMarker = L.icon({
  iconUrl: "../img/pin.svg",
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

//TODO переписать одной функцией
const currentMarkers = [];
const cleanMapMarker = () => {
  currentMarkers.forEach((marker) => {
    map.removeLayer(marker);
  });
};

const addMarker = (adList) => {
  adList.forEach((ad) => {
    const createMarker = L.marker(
      {
        lat: ad.location.lat,
        lng: ad.location.lng,
      },
      {
        icon: createIconMarker,
      }
    );
    currentMarkers.push(createMarker);
    createMarker.addTo(map).bindPopup(createPopupAd(ad), {
      keepInView: true,
    });
  });
};

const mainIconPin = L.icon({
  iconUrl: "../img/main-pin.svg",
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarkerPin = L.marker(
  {
    lat: coordinatesCenterMap.X,
    lng: coordinatesCenterMap.Y,
  },
  {
    draggable: true,
    icon: mainIconPin,
  }
);

const inputAddressFromBody = document.querySelector("#address");
mainMarkerPin.on("moveend", (e) => {
  inputAddressFromBody.value = e.target
    .getLatLng()
    .toString()
    .replace(/[a-zA-Z()]/g, "");
});

mainMarkerPin.addTo(map);

export { addMarker, cleanMapMarker };
