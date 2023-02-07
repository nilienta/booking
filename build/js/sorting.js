import markersList from "./edit-marker-list.js";
import sortingFeatures from "./sorting-features";

//FIXME не правильно работает сортировка, повторить: Бунгало-вай-фай-прайс до 10
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

const sortingPrice = (sortedArray, nameFilter, selectValueFilter) => {
  const priceRangeForSelectFilter = PRICE_RANGE[selectValueFilter];
  return sortedArray.filter(
    (item) =>
      item.offer[nameFilter] >= priceRangeForSelectFilter.MIN &&
      item.offer[nameFilter] <= priceRangeForSelectFilter.MAX
  );
};

const sortingGuests = (sortedArray, nameFilter, selectValueFilter) => {
  const guestsMap = new Map([
    [GUESTS_AMOUNT.one, { handler: (item) => item.offer[nameFilter] === 1 }],
    [GUESTS_AMOUNT.two, { handler: (item) => item.offer[nameFilter] === 2 }],
    [GUESTS_AMOUNT.moreTwo, { handler: (item) => item.offer[nameFilter] > 2 }],
  ]);
  return sortedArray.filter((item) =>
    guestsMap.get(selectValueFilter).handler(item)
  );
};

export const sortingAd = (adList) => {
  let sortedArray = [...adList];

  const sortingAnyFilter = (arr, nameFilter, selectValueFilter) => {
    return arr.filter((item) => item.offer[nameFilter] == selectValueFilter);
  };

  const sortByAllFilters = () => {
    const selectsFiltersFromBody = Array.from(
      document.querySelectorAll(".map__filter")
    );

    selectsFiltersFromBody.forEach((item) => {
      const nameFilter = item.id.split("-")[1];
      const selectValueFilter = item.value;
      //TODO попробовать редьюс
      if (selectValueFilter !== AVAILABLE_FILTERS.any) {
        if (nameFilter === AVAILABLE_FILTERS.price) {
          sortedArray = sortingPrice(
            sortedArray,
            nameFilter,
            selectValueFilter
          );
        } else if (nameFilter === AVAILABLE_FILTERS.guests) {
          sortedArray = sortingGuests(
            sortedArray,
            nameFilter,
            selectValueFilter
          );
        } else {
          sortedArray = sortingAnyFilter(
            sortedArray,
            nameFilter,
            selectValueFilter
          );
        }
      }
    });

    //  updateMap(sortingFeatures(sortedArray));
    markersList.update(sortingFeatures(sortedArray));
  };

  sortByAllFilters(adList);
};
