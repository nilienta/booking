import "../js/validate-form.js";
import "../js/map.js";
import "../js/sorting.js";
import uploadAvatar from "../js/upload-avatar.js";
import getDataSupply from "./api.js";
import { createMarker } from "../js/map.js";
import { sortingAdvertisement } from "../js/sorting.js";

uploadAvatar();

let arrAdvertisement = [];
getDataSupply().then((dataBase) => {
  arrAdvertisement = dataBase;
  createMarker(dataBase);
});

const filters = document.querySelector(".map__filters");
filters.addEventListener("change", () => {
  sortingAdvertisement(arrAdvertisement);
});
