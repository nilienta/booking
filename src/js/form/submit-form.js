import { createModalError, createModalSuccess } from '../create-modal-info.js';
import { sendData } from '../api.js';
import { BOOKING_URL_SEND_AD } from '../constants.js';
import { resetForm } from './reset-form.js';

const adForm = document.querySelector('.ad-form');

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
