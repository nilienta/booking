const sortingFeatures = (sortedArray) => {
  const inputCheckedFromFieldsetFeatures = Array.from(
    document.querySelectorAll("#housing-features > .map__checkbox:checked")
  );
  const checkedFeatures = inputCheckedFromFieldsetFeatures.reduce(
    (features, item) => {
      features.push(item.value);
      return features;
    },
    []
  );

  const sortedByFeatures = sortedArray.filter((ad) => {
    if (ad?.offer?.features && checkedFeatures.length > 0) {
      return checkedFeatures.every((feature) =>
        ad.offer.features.includes(feature)
      );
    }
  });

  return sortedByFeatures.length > 0 ? sortedByFeatures : sortedArray;
};

export default sortingFeatures;
