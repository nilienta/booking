import {
  addFeaturesInPopup,
  addPhotosInPopup,
  addAvatarInPopup,
} from './fill-popup.js';
import { TYPE_FROM_EN_TO_RU } from '../constants.js';

export const createPopupAd = (elem) => {
  const offer = elem?.offer;
  if (!offer) return;

  const articlePopupFromTemplateCard = document
    .querySelector('#card')
    .content.querySelector('.popup');
  const articlePopupAd = articlePopupFromTemplateCard.cloneNode(true);

  const fillTextContent = (querySelector, metricAd) => {
    articlePopupAd.querySelector(querySelector).textContent = metricAd;
  };
  fillTextContent('.popup__title', offer.title);
  fillTextContent('.popup__text--address', offer.address);
  fillTextContent('.popup__text--price', `${offer.price} р/ночь`);
  fillTextContent('.popup__type', TYPE_FROM_EN_TO_RU[offer.type]);
  fillTextContent(
    '.popup__text--capacity',
    `${offer.rooms} комн. для ${offer.guests} чел.`
  );
  fillTextContent(
    '.popup__text--time',
    `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`
  );
  fillTextContent('.popup__description', offer.description);

  addPhotosInPopup(articlePopupAd, offer);
  addFeaturesInPopup(articlePopupAd, offer);
  addAvatarInPopup(articlePopupAd, elem);

  return articlePopupAd;
};
