import { getRandomElementRange } from "./utils.js";
import { getRandomElemArr } from "./utils.js";
import { getArrRandomLength } from "./utils.js";

import { getSrcAvatar } from "./avatar.js";

import { titles } from "./data.js";
import { arrFeatures } from "./data.js";
import { descriptions } from "./data.js";
import { arrPhotos } from "./data.js";

export const createSupplyAmount = (amount) => {
  const availableHousing = [];
  for (let i = 1; i <= amount; i += 1) {
    availableHousing.push(createSupply());
  }
  return availableHousing;
};
const coordinates = {
  x: getRandomElementRange(35.65, 35.7, 5),
  y: getRandomElementRange(139.7, 139.8, 5),
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
