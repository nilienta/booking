export const addFeaturesInPopup = (articlePopupAd, offer) => {
  const createLiElFeature = (feature) => {
    const liElFeature = document.createElement('li');
    liElFeature.classList.add('popup__feature', `popup__feature--${feature}`);
    return liElFeature;
  };
  const ulFeaturesFromPopupAd =
    articlePopupAd.querySelector('.popup__features');
  ulFeaturesFromPopupAd.innerHTML = '';
  if (offer.features) {
    offer.features.forEach((item) => {
      ulFeaturesFromPopupAd.appendChild(createLiElFeature(item));
    });
  }
};

export const addPhotosInPopup = (articlePopupAd, offer) => {
  const imgAdFromPopupAd = articlePopupAd.querySelector('.popup__photo');
  articlePopupAd.querySelector('.popup__photos').textContent = '';
  if (offer.photos) {
    offer.photos.forEach((linkPhoto) => {
      const imgAd = imgAdFromPopupAd.cloneNode(true);
      imgAd.src = linkPhoto;
      articlePopupAd.querySelector('.popup__photos').appendChild(imgAd);
    });
  }
};

export const addAvatarInPopup = (articlePopupAd, elem) => {
  articlePopupAd.querySelector('.popup__avatar').src = elem?.author?.avatar;
};
