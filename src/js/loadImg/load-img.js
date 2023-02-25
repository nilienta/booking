import { POSSIBLE_FILE_TYPES_IMG } from '../constants.js';
import showToast from '../toast.js';

const loadImg = (inputFile, runAfterLoadFile) => {
  const fileAvatar = inputFile.files[0];
  const nameFileAvatar = fileAvatar?.name?.toLowerCase();
  const isFormatFileCorrect = POSSIBLE_FILE_TYPES_IMG.some((item) =>
    nameFileAvatar?.endsWith(item)
  );
  if (isFormatFileCorrect) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(fileAvatar);
    fileReader.addEventListener('load', () => {
      runAfterLoadFile(fileReader);
    });
    fileReader.addEventListener('error', () => {
      showToast('Произошла ошибка при чтении файла');
    });
  } else {
    showToast('Расширение файла не корректно');
  }
};

export default loadImg;
