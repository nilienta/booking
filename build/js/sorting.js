import { createMarker, cleanMapMarker } from "./map";
import { sortingFeatures } from "./sorting-features";

const updateMap = (newArr) => {
  cleanMapMarker();
  createMarker(newArr);
};

const PriceRange = {
  LOW: {
    MIN: 0,
    MAX: 10000,
  },
  MIDDLE: {
    MIN: 10001,
    MAX: 50000,
  },
  HIGH: {
    MIN: 50001,
    MAX: 1000000,
  },
};

// TODO: попробовать объединить фильтр, отличается nameOptionFilter и условный параметр

const sortingPrice = (sortedArray, nameFilter, nameOptionFilter) => {
  const filteringPriceRange = PriceRange[nameOptionFilter.toUpperCase()];
  return sortedArray.filter(
    (item) =>
      item.offer[nameFilter] >= filteringPriceRange.MIN &&
      item.offer[nameFilter] <= filteringPriceRange.MAX
  );
};

// TODO: избавиться от повторного вызова фильтра
const sortingGuests = (sortedArray, nameFilter, nameOptionFilter) => {
  if (nameOptionFilter === "1") {
    return sortedArray.filter((item) => item.offer[nameFilter] === 1);
  } else if (nameOptionFilter === "2") {
    return sortedArray.filter((item) => item.offer[nameFilter] === 2);
  } else if (nameOptionFilter === "0") {
    return sortedArray.filter((item) => item.offer[nameFilter] > 2);
  }
};

export const sortingAdvertisement = (advertisementList) => {
  let sortedArray = [...advertisementList];

  const sortingOneFilter = (arr, nameFilter, nameOptionFilter) => {
    return arr.filter((item) => item.offer[nameFilter] == nameOptionFilter);
  };

  const sortingAll = () => {
    const allNameFilters =
      document.querySelectorAll("form.map__filters")[0].children;

    for (let i = 0; i < allNameFilters.length - 1; i++) {
      const nameFilter = allNameFilters[i].id.split("-")[1];
      const nameOptionFilter = allNameFilters[i].value;
      if (nameOptionFilter !== "any") {
        if (nameFilter === "price") {
          sortedArray = sortingPrice(sortedArray, nameFilter, nameOptionFilter);
        } else if (nameFilter === "guests") {
          sortedArray = sortingGuests(
            sortedArray,
            nameFilter,
            nameOptionFilter
          );
        } else {
          sortedArray = sortingOneFilter(
            sortedArray,
            nameFilter,
            nameOptionFilter
          );
        }
      }
    }

    const fieldsetFeatures = allNameFilters[
      allNameFilters.length - 1
    ].querySelectorAll(".map__checkbox:checked");
    sortingFeatures(sortedArray, fieldsetFeatures);

    updateMap(sortingFeatures(sortedArray, fieldsetFeatures));
  };

  sortingAll(advertisementList);
};
