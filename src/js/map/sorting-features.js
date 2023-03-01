const sortingFeatures = (sortedArray) => {
  const checkedFeatures = Array.from(
    document.querySelectorAll('#housing-features > .map__checkbox:checked')
  ).map((checkbox) => checkbox.value);

  if (checkedFeatures.length > 0) {
    return sortedArray.filter((ad) => {
      if (ad?.offer?.features) {
        return checkedFeatures.every((feature) =>
          ad.offer.features.includes(feature)
        );
      }
      return false;
    });
  }
  return sortedArray;
};

export default sortingFeatures;
