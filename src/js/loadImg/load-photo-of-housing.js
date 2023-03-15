import loadImg from './load-img.js';
import {
  STYLE_IMG_PARAMS,
  TEXT_MANY_PHOTOS,
  MAX_COUNT_PHOTO,
} from '../constants.js';
import { resetDivPhoto } from '../form/reset-form.js';

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

const checkCountPhoto = (inputFile) => {
  const textValidity =
    inputFile?.files?.length > MAX_COUNT_PHOTO ? TEXT_MANY_PHOTOS : '';
  inputFile.setCustomValidity(textValidity);
  inputFile.reportValidity();
};

const loadPhoto = (evt) => {
  const inputFile = evt.target;
  checkCountPhoto(inputFile);
  loadImg(inputFile).then((photoSrc) => getImgForPhoto(photoSrc));
};

const onPhotoChange = () => {
  const inputFileFromBody = document.querySelector('#images');
  inputFileFromBody.addEventListener('change', (evt) => {
    resetDivPhoto();
    loadPhoto(evt);
  });
};

export default onPhotoChange;
