import { createMarker, cleanMapMarker } from "./map";
import { sortingFeatures } from "./sorting-features";

const updateMap = (newArr) => {
  cleanMapMarker();
  createMarker(newArr);
};

const PRICE_RANGE = {
  low: {
    MIN: 0,
    MAX: 10000,
  },
  middle: {
    MIN: 10001,
    MAX: 50000,
  },
  high: {
    MIN: 50001,
    MAX: 1000000,
  },
};
const GUESTS_AMOUNT = { one: "1", two: "2", moreTwo: "0" };
const AVAILABLE_FILTERS = { any: "any", price: "price", guests: "guests" };
// TODO: попробовать объединить фильтр, отличается nameOptionFilter и условный параметр

const sortingPrice = (sortedArray, nameFilter, nameOptionFilter) => {
  const filteringPriceRange = PRICE_RANGE[nameOptionFilter];
  return sortedArray.filter(
    (item) =>
      item.offer[nameFilter] >= filteringPriceRange.MIN &&
      item.offer[nameFilter] <= filteringPriceRange.MAX
  );
};

// TODO: избавиться от повторного вызова фильтра
const sortingGuests = (sortedArray, nameFilter, nameOptionFilter) => {
  const guestMap = new Map([
    [GUESTS_AMOUNT.one, { handler: (item) => item.offer[nameFilter] === 1 }],
    [GUESTS_AMOUNT.two, { handler: (item) => item.offer[nameFilter] === 2 }],
    [GUESTS_AMOUNT.moreTwo, { handler: (item) => item.offer[nameFilter] > 2 }],
  ]);
  return sortedArray.filter((item) =>
    guestMap.get(nameOptionFilter).handler(item)
  );
};

export const sortingAdvertisement = (advertisementList) => {
  let sortedArray = [...advertisementList];

  const sortingOneFilter = (arr, nameFilter, nameOptionFilter) => {
    return arr.filter((item) => item.offer[nameFilter] == nameOptionFilter);
  };

  const sortingAll = () => {
    const allNameFilters =
      document.querySelectorAll("form.map__filters")[0].children;

    for (let index = 0; index < allNameFilters.length - 1; index++) {
      const nameFilter = allNameFilters[index].id.split("-")[1];
      const nameOptionFilter = allNameFilters[index].value;
      if (nameOptionFilter !== AVAILABLE_FILTERS.any) {
        if (nameFilter === AVAILABLE_FILTERS.price) {
          sortedArray = sortingPrice(sortedArray, nameFilter, nameOptionFilter);
        } else if (nameFilter === AVAILABLE_FILTERS.guests) {
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

    const fieldsetFeatures = Array.from(
      allNameFilters[allNameFilters.length - 1].querySelectorAll(
        ".map__checkbox:checked"
      )
    );
    sortingFeatures(sortedArray, fieldsetFeatures);

    updateMap(sortingFeatures(sortedArray, fieldsetFeatures));
  };

  sortingAll(advertisementList);
};
