const uploadAvatar = (evt) => {
  const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  const imgPreviewAvatarFromBody = document
    .querySelector('#avatar-preview')
    .querySelector('img');

  const fileAvatar = evt.target.files[0];
  const nameFileAvatar = fileAvatar.name.toLowerCase();

  const isFormatFileCorrect = FILE_TYPES.some((item) =>
    nameFileAvatar?.endsWith(item)
  );
  if (isFormatFileCorrect) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(fileAvatar);
    fileReader.addEventListener('load', () => {
      imgPreviewAvatarFromBody.src = fileReader.result;
    });
    fileReader.addEventListener('error', () => {
      console.error('Произошла ошибка при чтении файла');
    });
  } else {
    evt.target.setCustomValidity('Расширение файла не корректно');
    evt.target.reportValidity();
  }
};

export default uploadAvatar;
