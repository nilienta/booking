import "../js/validate-form.js";
import "../js/map.js";
import "../js/sorting.js";
import AvatarUpload from "../js/avatar-upload.js";
import getDataSupply from "./api.js";
import { createMarker } from "../js/map.js";
import { sortingAdvertisement } from "../js/sorting.js";
import { handleFormSubmit } from "./post-offer.js";

AvatarUpload();

let arrAdvertisement = [];
getDataSupply().then((dataBase) => {
  arrAdvertisement = dataBase;
  createMarker(dataBase);
});

const filters = document.querySelector(".map__filters");
filters.addEventListener("change", () => {
  sortingAdvertisement(arrAdvertisement);
});
