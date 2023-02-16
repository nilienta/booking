import loadImg from './load-img';

const loadAvatar = (evt) => {
  const IMG_PARAMS = {
    BORDER_RADIUS: '5px',
    OBJECT_FIT: 'cover',
  };
  const inputFile = evt.target;

  const imgPreviewAvatarFromBody = document
    .querySelector('#avatar-preview')
    .querySelector('img');
  imgPreviewAvatarFromBody.style.borderRadius = IMG_PARAMS.BORDER_RADIUS;
  imgPreviewAvatarFromBody.style.objectFit = IMG_PARAMS.OBJECT_FIT;

  const changeAvatar = (fileReader) => {
    imgPreviewAvatarFromBody.src = fileReader.result;
  };

  loadImg(inputFile, changeAvatar);
};

export default loadAvatar;
