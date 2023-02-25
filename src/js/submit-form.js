import { createModalError, createModalSuccess } from './create-modal-info.js';
import { sendData } from './api.js';

const BOOKING_URL_SEND_AD = 'https://23.javascript.pages.academy/keksobooking';
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
const onSuccess = () => {
  resetForm();
  createModalSuccess();
};

export const onFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      BOOKING_URL_SEND_AD,
      onSuccess,
      createModalError,
      new FormData(evt.target)
    );
  });
};
