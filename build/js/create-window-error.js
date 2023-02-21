const messageDeleteHandler = (messageElement) => {
  messageElement.remove();
};
const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const onPopupEscKeydown = (evt) => {
  const body = document.querySelector('body');
  if (isEscEvent(evt)) {
    messageDeleteHandler();
    body.removeEventListener('keydown', onPopupEscKeydown);
  }
};

const createWindowError = () => {
  const divErrorFromBody = document
    .querySelector('#error')
    .content.querySelector('.error')
    .cloneNode(true);

  const body = document.querySelector('body');
  body.prepend(divErrorFromBody);

  body.addEventListener('click', messageDeleteHandler(divErrorFromBody), {
    once: true,
  });
  body.addEventListener('keydown', onPopupEscKeydown());
  const ButtonCloseError = divErrorFromBody.querySelector('.error__button');
  ButtonCloseError.addEventListener(
    'click',
    messageDeleteHandler(divErrorFromBody),
    {
      once: true,
    }
  );
};

export default createWindowError;
