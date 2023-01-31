import "../js/validate-form.js";
import "../js/map.js";
import "../js/sorting.js";
import uploadAvatar from "../js/upload-avatar.js";
import { request } from "./api.js";
import { createMarker } from "../js/map.js";
import { sortingAdvertisement } from "../js/sorting.js";

uploadAvatar();

const bookingUrl = "https://23.javascript.pages.academy/keksobooking/data";

let advertisementList = [];
request(bookingUrl)
  .then((res) => {
    if (res) {
      advertisementList = res;
      createMarker(res);
    }
  })
  .catch((error) => {
    console.error("Произошла ошибка!", error.message);
  });

const filters = document.querySelector(".map__filters");
filters.addEventListener("change", () => {
  sortingAdvertisement(advertisementList);
});
