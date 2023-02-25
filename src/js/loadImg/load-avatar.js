import loadImg from './load-img.js';
import { STYLE_IMG_PARAMS } from '../constants.js';

const loadAvatar = (evt) => {
  const inputFile = evt.target;

  const imgPreviewAvatarFromBody = document
    .querySelector('#avatar-preview')
    .querySelector('img');
  Object.assign(imgPreviewAvatarFromBody.style, STYLE_IMG_PARAMS);

  const changeAvatar = (fileReader) => {
    imgPreviewAvatarFromBody.src = fileReader.result;
  };

  loadImg(inputFile, changeAvatar);
};

export default loadAvatar;
