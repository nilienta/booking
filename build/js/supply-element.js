const supplePopup = (elem) => {
  const card = document.querySelector("#card").content.querySelector(".popup");

  const supplyElement = card.cloneNode(true);
  supplyElement.querySelector(".popup__title").textContent = elem.offer.title;
  supplyElement.querySelector(".popup__text--address").textContent =
    elem.offer.address;
  supplyElement.querySelector(
    ".popup__text--price"
  ).textContent = `${elem.offer.price} р/ночь`;
  supplyElement.querySelector(".popup__type").textContent = elem.offer.type;
  supplyElement.querySelector(
    ".popup__text--capacity"
  ).textContent = `${elem.offer.rooms} комн. для ${elem.offer.guests} чел.`;
  supplyElement.querySelector(
    ".popup__text--time"
  ).textContent = `Заезд после ${elem.offer.checkin}, выезд до ${elem.offer.checkout}`;

  const createElementFeature = (feature) => {
    const featureItem = document.createElement("li");
    featureItem.classList.add("popup__feature", `popup__feature--${feature}`);

    return featureItem;
  };

  if (elem.offer.features !== undefined) {
    const featuresList = supplyElement.querySelector(".popup__features");
    featuresList.innerHTML = "";
    elem.offer.features.forEach((item) => {
      featuresList.appendChild(createElementFeature(item));
    });
  }

  supplyElement.querySelector(".popup__description").textContent =
    elem.offer.description;

  const getImgTeg = supplyElement.querySelector(".popup__photo");
  supplyElement.querySelector(".popup__photos").textContent = "";

  if (elem.offer.photos !== undefined) {
    elem.offer.photos.forEach((linkPhoto) => {
      const newImg = getImgTeg.cloneNode(true);
      newImg.src = linkPhoto;
      supplyElement.querySelector(".popup__photos").appendChild(newImg);
    });
  }

  supplyElement.querySelector(".popup__avatar").src = elem.author.avatar;

  return supplyElement;
};

export default supplePopup;
