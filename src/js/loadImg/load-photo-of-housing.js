import loadImg from './load-img.js';
import setImgPreviewStyles from './set-style-img.js';

//TODO добавить множественную подгрузку фото <!-- multiple="multiple"  -->
const validateLoadPhoto = (evt) => {
  const inputFile = evt.target;

  const divPhotoContainerFromBody = document.querySelector(
    '.ad-form__photo-container'
  );

  const createImgForPhoto = (fileReader) => {
    const divEmptyFromBody = document.querySelector('.ad-form__photo--empty');
    divEmptyFromBody.style.display = 'none';

    const divPreviewPhoto = document.createElement('div');
    divPreviewPhoto.classList.add('ad-form__photo');

    const imgPreviewPhoto = document.createElement('img');
    setImgPreviewStyles(imgPreviewPhoto);

    imgPreviewPhoto.src = fileReader.result;
    divPreviewPhoto.appendChild(imgPreviewPhoto);
    divPhotoContainerFromBody.appendChild(divPreviewPhoto);
  };

  const countPhoto = Array.from(
    divPhotoContainerFromBody.querySelectorAll('img')
  ).length;

  if (countPhoto < 6) {
    loadImg(inputFile, createImgForPhoto);
  } else {
    inputFile.setCustomValidity(
      'Количество загружаемых фото не может превышать 6 штук'
    );
    inputFile.reportValidity();
  }
};

export default validateLoadPhoto;
