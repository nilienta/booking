export const sortingFeatures = (sortedArray, fieldsetFeatures) => {
  let sortedByFeatures = [];
  const checkedHousingFeatures = [];

  for (let item of fieldsetFeatures) {
    checkedHousingFeatures.push(item.value);
  }

  sortedByFeatures = sortedArray.filter((ad) => {
    if (ad.offer.features && checkedHousingFeatures.length > 0) {
      return checkedHousingFeatures.every((feature) =>
        ad.offer.features.includes(feature)
      );
    }
  });

  return sortedByFeatures.length > 0 ? sortedByFeatures : sortedArray;
};
