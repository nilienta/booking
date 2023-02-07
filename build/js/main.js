import "../js/validate-form.js";
import "../js/map.js";
import "../js/sorting.js";
import uploadAvatar from "../js/upload-avatar.js";
import { fetchRequest } from "./api.js";
import markersList from "./edit-marker-list.js";
import { sortingAd } from "../js/sorting.js";

uploadAvatar();

const BOOKING_URL_DATA =
  "https://23.javascript.pages.academy/keksobooking/data";

let adList = [];
fetchRequest(BOOKING_URL_DATA)
  .then((res) => {
    if (res) {
      adList = res;
      markersList.add(res);
    }
  })
  .catch((error) => {
    console.error("Произошла ошибка!", error.message);
  });

const formFiltersFromBody = document.querySelector(".map__filters");
formFiltersFromBody.addEventListener("change", () => {
  sortingAd(adList);
});
