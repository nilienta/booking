import { POSSIBLE_FILE_TYPES_IMG, MAX_COUNT_PHOTO } from '../constants.js';
import { showToast } from '../toast.js';

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

export const loadImg = async (inputFile) => {
  const files = inputFile.files;
  const urlsPhoto = [];
  for (let num = 0; num < files.length && num < MAX_COUNT_PHOTO; num++) {
    const filePhoto = files[num];
    const nameFilePhoto = filePhoto?.name?.toLowerCase();
    const isFormatFileCorrect = POSSIBLE_FILE_TYPES_IMG.some((item) =>
      nameFilePhoto?.endsWith(item)
    );
    if (isFormatFileCorrect) {
      try {
        const base64URL = await createFileReader(files[num]);
        urlsPhoto.push(base64URL);
      } catch (err) {
        showToast(err.message);
      }
    } else {
      showToast('Расширение файла не корректно');
    }
  }
  return urlsPhoto;
};
