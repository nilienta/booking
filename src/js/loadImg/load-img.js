import { POSSIBLE_FILE_TYPES_IMG } from '../constants.js';
import showToast from '../toast.js';

const createFileReader = async (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = () => {
      reject(new Error('Произошла ошибка при чтении файла'));
    };
  });

const loadImg = async (inputFile) => {
  const fileAvatar = inputFile.files[0];
  const nameFileAvatar = fileAvatar?.name?.toLowerCase();
  const isFormatFileCorrect = POSSIBLE_FILE_TYPES_IMG.some((item) =>
    nameFileAvatar?.endsWith(item)
  );
  if (isFormatFileCorrect) {
    try {
      const base64URL = await createFileReader(fileAvatar);
      return base64URL;
    } catch (err) {
      showToast(err.message);
    }
  } else {
    showToast('Расширение файла не корректно');
  }
};

export default loadImg;
