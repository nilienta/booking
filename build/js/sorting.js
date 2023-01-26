import { createMarker, cleanMapMarker } from "./map";

const updateMap = (newArr) => {
  cleanMapMarker();
  createMarker(newArr);
};

export const sortingAdvertisement = (arrAdvertisement) => {
  const sortingOneFilter = (arr, nameFilter, nameOptionFilter) => {
    if (nameOptionFilter === "any") {
      return arr;
    } else {
      return arr.filter((item) => item.offer[nameFilter] == nameOptionFilter);
    }
  };

  let sortedArray = [...arrAdvertisement];

  const sortingAll = () => {
    const allNameFilters =
      document.querySelectorAll("form.map__filters")[0].children;

    for (let i = 0; i < allNameFilters.length - 1; i++) {
      const nameFilter = allNameFilters[i].id.split("-")[1];
      const nameOptionFilter = allNameFilters[i].value;
      sortedArray = sortingOneFilter(sortedArray, nameFilter, nameOptionFilter);
    }
    updateMap(sortedArray);
  };

  sortingAll(arrAdvertisement);
};
