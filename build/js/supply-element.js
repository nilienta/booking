const createPopupAd = (elem) => {
  const articlePopupFromTemplateCard = document
    .querySelector("#card")
    .content.querySelector(".popup");
  const articlePopupAd = articlePopupFromTemplateCard.cloneNode(true);

  articlePopupAd.querySelector(".popup__title").textContent =
    elem?.offer?.title;
  articlePopupAd.querySelector(".popup__text--address").textContent =
    elem?.offer?.address;
  articlePopupAd.querySelector(
    ".popup__text--price"
  ).textContent = `${elem?.offer?.price} р/ночь`;
  articlePopupAd.querySelector(".popup__type").textContent = elem?.offer?.type;
  articlePopupAd.querySelector(
    ".popup__text--capacity"
  ).textContent = `${elem?.offer?.rooms} комн. для ${elem?.offer?.guests} чел.`;
  articlePopupAd.querySelector(
    ".popup__text--time"
  ).textContent = `Заезд после ${elem?.offer?.checkin}, выезд до ${elem?.offer?.checkout}`;

  const createLiElFeature = (feature) => {
    const liElFeature = document.createElement("li");
    liElFeature.classList.add("popup__feature", `popup__feature--${feature}`);
    return liElFeature;
  };
  const ulFeaturesFromPopupAd =
    articlePopupAd.querySelector(".popup__features");
  ulFeaturesFromPopupAd.innerHTML = "";
  if (elem?.offer?.features) {
    elem.offer.features.forEach((item) => {
      ulFeaturesFromPopupAd.appendChild(createLiElFeature(item));
    });
  }

  articlePopupAd.querySelector(".popup__description").textContent =
    elem?.offer?.description;

  const imgAdFromPopupAd = articlePopupAd.querySelector(".popup__photo");
  articlePopupAd.querySelector(".popup__photos").textContent = "";
  if (elem?.offer?.photos) {
    elem.offer.photos.forEach((linkPhoto) => {
      const imgAd = imgAdFromPopupAd.cloneNode(true);
      imgAd.src = linkPhoto;
      articlePopupAd.querySelector(".popup__photos").appendChild(imgAd);
    });
  }

  articlePopupAd.querySelector(".popup__avatar").src = elem?.author?.avatar;

  return articlePopupAd;
};

export default createPopupAd;
