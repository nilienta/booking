const sortingFeatures = (sortedArray) => {
  console.log("params=", sortedArray);

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

  if (checkedFeatures.length > 0) {
    return sortedArray.filter((ad) => {
      if (ad?.offer?.features) {
        return checkedFeatures.every((feature) =>
          ad.offer.features.includes(feature)
        );
      }
    });
  } else {
    return sortedArray;
  }
};

export default sortingFeatures;
