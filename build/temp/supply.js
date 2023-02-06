import { getRandomElementRange } from "./utils.js";
import { getRandomElemArr } from "./utils.js";
import { getArrRandomLength } from "./utils.js";

import getSrcAvatar from "./avatar.js";

import { titles } from "../js/data.js";
import { arrFeatures } from "../js/data.js";
import { descriptions } from "../js/data.js";
import { arrPhotos } from "../js/data.js";

//TODO удалить код?
let coordinates = {
  lat: getRandomElementRange(54.677, 54.708, 5),
  lng: getRandomElementRange(20.504, 20.507, 5),
};

const createSupply = () => {
  return {
    author: {
      avatar: getSrcAvatar(),
    },
    offer: createOffer(),
    location: coordinates,
  };
};

const createOffer = () => {
  return {
    title: getRandomElemArr(titles),
    address: coordinates,
    price: getRandomElementRange(1000, 800000, 0),
    type: getRandomElemArr(["palance", "flat", "house", "bungalow"]),
    rooms: getRandomElementRange(1, 10, 0),
    guests: getRandomElementRange(1, 30, 0),
    checkin: getRandomElemArr(["12:00", "13:00", "14:00"]),
    checkout: getRandomElemArr(["12:00", "13:00", "14:00"]),
    features: getArrRandomLength(arrFeatures),
    description: getRandomElemArr(descriptions),
    photos: getArrRandomLength(arrPhotos),
  };
};

export default createSupply;
