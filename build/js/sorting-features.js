export const sortingFeatures = (sortedArray, fieldsetFeatures) => {
  const checkedHousingFeatures = fieldsetFeatures.reduce((features, item) => {
    features.push(item.value);
    return features;
  }, []);

  const sortedByFeatures = sortedArray.filter((ad) => {
    if (ad?.offer?.features && checkedHousingFeatures.length > 0) {
      return checkedHousingFeatures.every((feature) =>
        ad.offer.features.includes(feature)
      );
    }
  });

  return sortedByFeatures.length > 0 ? sortedByFeatures : sortedArray;
};
