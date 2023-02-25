import loadImg from './load-img.js';
import setImgPreviewStyles from './set-style-img.js';

const loadAvatar = (evt) => {
  const inputFile = evt.target;

  const imgPreviewAvatarFromBody = document
    .querySelector('#avatar-preview')
    .querySelector('img');
  setImgPreviewStyles(imgPreviewAvatarFromBody);

  const changeAvatar = (fileReader) => {
    imgPreviewAvatarFromBody.src = fileReader.result;
  };

  loadImg(inputFile, changeAvatar);
};

export default loadAvatar;
