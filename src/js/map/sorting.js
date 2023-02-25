import markersList from './edit-marker-list.js';
import sortingFeatures from './sorting-features.js';
import { PRICE_RANGE, GUESTS_AMOUNT, AVAILABLE_FILTERS } from '../constants.js';

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

const sortingAnyFilter = (arr, nameFilter, selectValueFilter) =>
  arr.filter((item) => item.offer[nameFilter] === selectValueFilter);

const sortingAd = (adList) => {
  let sortedArray = [...adList];

  const sortByAllFilters = () => {
    const selectsFiltersFromBody = Array.from(
      document.querySelectorAll('.map__filter')
    );

    selectsFiltersFromBody.forEach((item) => {
      const nameFilter = item.id.split('-')[1];
      const selectValueFilter = item.value;
      if (selectValueFilter !== AVAILABLE_FILTERS.any) {
        switch (nameFilter) {
          case AVAILABLE_FILTERS.guests:
            sortedArray = sortingGuests(
              sortedArray,
              nameFilter,
              selectValueFilter
            );
            break;
          case AVAILABLE_FILTERS.price:
            sortedArray = sortingPrice(
              sortedArray,
              nameFilter,
              selectValueFilter
            );
            break;
          default:
            sortedArray = sortingAnyFilter(
              sortedArray,
              nameFilter,
              selectValueFilter
            );
            break;
        }
      }
    });

    markersList.update(sortingFeatures(sortedArray));
  };

  sortByAllFilters(adList);
};

export default sortingAd;
