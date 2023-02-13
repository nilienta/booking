const IMG_PARAMS = {
  WIDTH: '70px',
  HEIGHT: '70px',
  BORDER_RADIUS: '5px',
  OBJECT_FIT: 'cover',
};

const inputFileFromBodyImg = document.querySelector('#images');
// FIXME дублирует событие onload
// FIXME код частично дублирует uploadAvatar
const validateLoadPhoto = () => {
  const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  const divPreviewAvatarFromBody = document.querySelector('.ad-form__photo');
  divPreviewAvatarFromBody.style = 'display: flex;gap: 5px;';

  const createImgForPhoto = (fileReader) => {
    const imgPreviewPhoto = document.createElement('img');
    imgPreviewPhoto.style.width = IMG_PARAMS.WIDTH;
    imgPreviewPhoto.style.height = IMG_PARAMS.HEIGHT;
    imgPreviewPhoto.style.borderRadius = IMG_PARAMS.BORDER_RADIUS;
    imgPreviewPhoto.style.objectFit = IMG_PARAMS.OBJECT_FIT;
    imgPreviewPhoto.src = fileReader.result;
    divPreviewAvatarFromBody.appendChild(imgPreviewPhoto);
  };
  const addPreviewPhoto = () => {
    console.log('posle');
    const countPhoto = Array.from(
      divPreviewAvatarFromBody.querySelectorAll('img')
    ).length;
    if (countPhoto < 3) {
      const fileAvatar = inputFileFromBodyImg.files[0];
      const nameFileAvatar = fileAvatar?.name?.toLowerCase();
      const isFormatFileCorrect = FILE_TYPES.some((item) =>
        nameFileAvatar?.endsWith(item)
      );

      if (isFormatFileCorrect) {
        const fileReader = new FileReader();
        fileReader.addEventListener('load', () => {
          createImgForPhoto(fileReader);
        });
        fileReader.readAsDataURL(fileAvatar);
        fileReader.addEventListener('error', () => {
          console.error('Произошла ошибка при чтении файла');
        });
      }
      inputFileFromBodyImg.value = '';
    }
  };
  inputFileFromBodyImg.addEventListener('change', addPreviewPhoto);
};

export default validateLoadPhoto;
