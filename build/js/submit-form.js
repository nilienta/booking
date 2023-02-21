import { createWindowError, createWindowSuccess } from './create-window-info';

const adForm = document.querySelector('.ad-form');

const deleteDivPhoto = () => {
  const InputPhotoFromBody = document.querySelector('#images');
  InputPhotoFromBody.value = '';

  const divPhotoFromBody = Array.from(
    document.querySelectorAll('.ad-form__photo')
  );
  divPhotoFromBody.forEach((div) => {
    div.remove();
  });

  const divEmptyFromBody = document.querySelector('.ad-form__photo--empty');
  divEmptyFromBody.style.display = '';
};
const resetForm = () => {
  deleteDivPhoto();
  adForm.reset();
};
const sendData = async (onSuccess, onFail, data) => {
  try {
    const response = await fetch(
      'https://23.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: data,
      }
    );

    if (response.ok) {
      resetForm();
      onSuccess();
    } else {
      onFail(response.status);
      console.log(response);
      console.log('response.NEok');
    }
  } catch (error) {
    onFail(error.message);
    console.log('catch (error)');
  }
};

export const SS = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(createWindowSuccess, createWindowError, new FormData(evt.target));
  });
};
