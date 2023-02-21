// TODO вынести общие функции в отдельный файл
const body = document.querySelector('body');

const messageDeleteHandler = (messageElement) => {
  messageElement.remove();
};
const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const onPopupEscKeydown = (evt) => {
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

  body.appendChild(divErrorFromBody);

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
const createWindowSuccess = () => {
  const divSuccessFromBody = document
    .querySelector('#success')
    .content.querySelector('.success')
    .cloneNode(true);

  body.appendChild(divSuccessFromBody);
  body.addEventListener('click', messageDeleteHandler(divSuccessFromBody), {
    once: true,
  });
  body.addEventListener('keydown', onPopupEscKeydown);
};

export { createWindowError, createWindowSuccess };
