import { createMarker, cleanMapMarker } from "./map";

const updateMap = (newArr) => {
  cleanMapMarker();
  createMarker(newArr);
};

const sortingPrice = (sortedArray, nameFilter, nameOptionFilter) => {
  if (nameOptionFilter === "any") {
    return sortedArray;
  } else if (nameOptionFilter === "low") {
    return sortedArray.filter((item) => item.offer[nameFilter] < 10000);
  } else if (nameOptionFilter === "middle") {
    return sortedArray.filter(
      (item) => item.offer[nameFilter] > 10000 && item.offer[nameFilter] < 50000
    );
  } else if (nameOptionFilter === "high") {
    return sortedArray.filter((item) => item.offer[nameFilter] > 50000);
  }
};

const sortingGuests = (sortedArray, nameFilter, nameOptionFilter) => {
  if (nameOptionFilter === "any") {
    return sortedArray;
  } else if (nameOptionFilter === "1") {
    return sortedArray.filter((item) => item.offer[nameFilter] === 1);
  } else if (nameOptionFilter === "2") {
    return sortedArray.filter((item) => item.offer[nameFilter] === 2);
  } else if (nameOptionFilter === "0") {
    return sortedArray.filter((item) => item.offer[nameFilter] > 2);
  }
};

const sortingFeatures = (sortedArray, fieldsetFeatures) => {
  let sortedByFeatures = [];
  for (let item of fieldsetFeatures) {
    sortedByFeatures = [];
    if (item.checked) {
      const arrAdSorted =
        sortedByFeatures.length > 0 ? sortedByFeatures : sortedArray;
      arrAdSorted.forEach((ad) => {
        if (ad.offer.features) {
          const isFeature = ad.offer.features.some(
            (feature) => feature === item.value
          );
          if (isFeature) {
            sortedByFeatures.push(ad);
            sortedArray = [...sortedByFeatures];
          }
        }
      });
    }
  }
  return sortedByFeatures.length > 0 ? sortedByFeatures : sortedArray;
};

export const sortingAdvertisement = (arrAdvertisement) => {
  let sortedArray = [...arrAdvertisement];

  const sortingOneFilter = (arr, nameFilter, nameOptionFilter) => {
    if (nameOptionFilter === "any") {
      return arr;
    } else {
      return arr.filter((item) => item.offer[nameFilter] == nameOptionFilter);
    }
  };

  const sortingAll = () => {
    const allNameFilters =
      document.querySelectorAll("form.map__filters")[0].children;

    for (let i = 0; i < allNameFilters.length - 1; i++) {
      const nameFilter = allNameFilters[i].id.split("-")[1];
      const nameOptionFilter = allNameFilters[i].value;
      if (nameFilter === "price") {
        sortedArray = sortingPrice(sortedArray, nameFilter, nameOptionFilter);
      } else if (nameFilter === "guests") {
        sortedArray = sortingGuests(sortedArray, nameFilter, nameOptionFilter);
      } else {
        sortedArray = sortingOneFilter(
          sortedArray,
          nameFilter,
          nameOptionFilter
        );
      }
    }
    const fieldsetFeatures =
      allNameFilters[allNameFilters.length - 1].querySelectorAll("input");
    sortingFeatures(sortedArray, fieldsetFeatures);
    console.log(sortingFeatures(sortedArray, fieldsetFeatures));
    updateMap(sortingFeatures(sortedArray, fieldsetFeatures));
  };

  sortingAll(arrAdvertisement);
};
