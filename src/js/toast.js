import Toastify from 'toastify-js';

export const showToast = (text) => {
  Toastify({
    text: [text],
    duration: 5000,
    destination: '',
    newWindow: true,
    close: true,
    gravity: 'bottom',
    position: 'right',
    stopOnFocus: true,
    style: {
      background: '#262626',
    },
    onClick: function () {},
  }).showToast();
};
