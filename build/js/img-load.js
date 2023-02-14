const IMG_PARAMS = {
  WIDTH: '70px',
  HEIGHT: '70px',
  BORDER_RADIUS: '5px',
  OBJECT_FIT: 'cover',
};

// FIXME код частично дублирует uploadAvatar
// у файла создается img, у аватара изменяется. в файлах есть учёт количества фото. в фото бокс img создается. у аватара он уже есть с заданами размерами
const validateLoadPhoto = (evt) => {
  const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  const divPhotoContainerFromBody = document.querySelector(
    '.ad-form__photo-container'
  );

  const createImgForPhoto = (fileReader) => {
    const divEmptyFromBody = document.querySelector('.ad-form__photo--empty');
    divEmptyFromBody.style.display = 'none';

    const divPreviewPhoto = document.createElement('div');
    divPreviewPhoto.classList.add('ad-form__photo');

    const imgPreviewPhoto = document.createElement('img');
    imgPreviewPhoto.style.width = IMG_PARAMS.WIDTH;
    imgPreviewPhoto.style.height = IMG_PARAMS.HEIGHT;
    imgPreviewPhoto.style.borderRadius = IMG_PARAMS.BORDER_RADIUS;
    imgPreviewPhoto.style.objectFit = IMG_PARAMS.OBJECT_FIT;
    imgPreviewPhoto.src = fileReader.result;
    divPreviewPhoto.appendChild(imgPreviewPhoto);
    divPhotoContainerFromBody.appendChild(divPreviewPhoto);
  };

  const countPhoto = Array.from(
    divPhotoContainerFromBody.querySelectorAll('img')
  ).length;

  if (countPhoto < 6) {
    const fileAvatar = evt.target.files[0];

    const nameFileAvatar = fileAvatar?.name?.toLowerCase();
    const isFormatFileCorrect = FILE_TYPES.some((item) =>
      nameFileAvatar?.endsWith(item)
    );

    if (isFormatFileCorrect) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(fileAvatar);
      fileReader.addEventListener('load', () => {
        createImgForPhoto(fileReader);
      });
      fileReader.addEventListener('error', () => {
        console.error('Произошла ошибка при чтении файла');
      });
    } else {
      evt.target.setCustomValidity('Расширение файла не корректно');
      evt.target.reportValidity();
    }
  } else {
    evt.target.setCustomValidity(
      'Количество загружаемых фото не может превышать 6 штук'
    );
    evt.target.reportValidity();
  }
};

export default validateLoadPhoto;
