const loadImg = (inputFile, runAfterLoadFile) => {
  const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  const fileAvatar = inputFile.files[0];
  const nameFileAvatar = fileAvatar?.name?.toLowerCase();
  const isFormatFileCorrect = FILE_TYPES.some((item) =>
    nameFileAvatar?.endsWith(item)
  );

  if (isFormatFileCorrect) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(fileAvatar);
    fileReader.addEventListener('load', () => {
      runAfterLoadFile(fileReader);
    });
    fileReader.addEventListener('error', () => {
      console.error('Произошла ошибка при чтении файла');
    });
  } else {
    inputFile.setCustomValidity('Расширение файла не корректно');
    inputFile.reportValidity();
  }
};

export default loadImg;
