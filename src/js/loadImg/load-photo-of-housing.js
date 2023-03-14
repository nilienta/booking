import loadImg from './load-img.js';
import { COUNT_PREVIEW_PHOTO, STYLE_IMG_PARAMS } from '../constants.js';

const createImgForPhoto = (photoSrc) => {
  const divEmptyFromBody = document.querySelector('.ad-form__photo--empty');
  divEmptyFromBody.style.display = 'none';

  const imgPreviewPhoto = document.createElement('img');
  Object.assign(imgPreviewPhoto.style, STYLE_IMG_PARAMS);
  imgPreviewPhoto.src = photoSrc;

  const divPreviewPhoto = document.createElement('div');
  divPreviewPhoto.classList.add('ad-form__photo');
  divPreviewPhoto.appendChild(imgPreviewPhoto);

  const divPhotoContainerFromBody = document.querySelector(
    '.ad-form__photo-container'
  );
  divPhotoContainerFromBody.appendChild(divPreviewPhoto);
};

const getImgForPhoto = (arr) => {
  arr.forEach((photoSrc) => {
    createImgForPhoto(photoSrc);
  });
};

const validateLoadPhoto = (evt) => {
  const inputFile = evt.target;

  const divPhotoContainerFromBody = document.querySelector(
    '.ad-form__photo-container'
  );
  const countPhoto = Array.from(
    divPhotoContainerFromBody.querySelectorAll('img')
  ).length;

  if (countPhoto < COUNT_PREVIEW_PHOTO) {
    loadImg(inputFile).then((photoSrc) => getImgForPhoto(photoSrc));
  } else {
    inputFile.setCustomValidity(
      'Количество загружаемых фото не может превышать 6 штук'
    );
    inputFile.reportValidity();
  }
};

export default validateLoadPhoto;
