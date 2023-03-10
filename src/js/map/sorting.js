import markersList from './edit-marker-list.js';
import sortingFeatures from './sorting-features.js';
import { PRICE_RANGE, GUESTS_AMOUNT, AVAILABLE_FILTERS } from '../constants.js';

const sortingType = (sortedArray, selectValueFilter) =>
  sortedArray.filter((item) => item.offer['type'] === selectValueFilter);

const sortingPrice = (sortedArray, selectValueFilter) => {
  const priceRangeForSelectFilter = PRICE_RANGE[selectValueFilter];
  return sortedArray.filter(
    (item) =>
      item.offer['price'] >= priceRangeForSelectFilter.MIN &&
      item.offer['price'] <= priceRangeForSelectFilter.MAX
  );
};

const sortingRooms = (sortedArray, selectValueFilter) =>
  sortedArray.filter(
    (item) => item.offer['rooms'] === Number(selectValueFilter)
  );

const sortingGuests = (sortedArray, selectValueFilter) => {
  const guestsMap = new Map([
    [GUESTS_AMOUNT.one, { handler: (item) => item.offer['guests'] === 1 }],
    [GUESTS_AMOUNT.two, { handler: (item) => item.offer['guests'] === 2 }],
    [GUESTS_AMOUNT.moreTwo, { handler: (item) => item.offer['guests'] > 2 }],
  ]);
  return sortedArray.filter((item) =>
    guestsMap.get(selectValueFilter).handler(item)
  );
};

const filterNameToFilter = {
  type: sortingType,
  rooms: sortingRooms,
  guests: sortingGuests,
  price: sortingPrice,
};

const sortingAd = (adList) => {
  let sortedArray = [...adList];
  const sortByAllFilters = () => {
    const selectsFiltersFromBody = Array.from(
      document.querySelectorAll('.map__filter')
    );

    selectsFiltersFromBody.forEach((item) => {
      const nameFilter = filterNameToFilter[item.id.split('-')[1]];
      const selectValueFilter = item.value;

      const getSortedArray = () => {
        sortedArray = nameFilter(sortedArray, selectValueFilter);
      };
      selectValueFilter !== AVAILABLE_FILTERS.any && getSortedArray();
    });
    //TODO добавить дебаунс
    markersList.update(sortingFeatures(sortedArray));
  };

  sortByAllFilters(adList);
};

export default sortingAd;
