const body = document.querySelector('body');

const deleteModalMessage = () => {
  const divSuccess = document.querySelector('.success');
  const divError = document.querySelector('.error');
  divSuccess?.remove();
  divError?.remove();
  body.removeEventListener('click', deleteModalMessage);
  // FIXME убрать взаимосвзяь функций
  body.removeEventListener('keydown', onPopupEscKeydown);
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    deleteModalMessage();
  }
};
// FIXME дублирование кода createWindowError и createWindowSuccess
const createWindowError = (textError) => {
  const divErrorFromBody = document
    .querySelector('#error')
    .content.querySelector('.error')
    .cloneNode(true);
  const pTextError = divErrorFromBody.querySelector('.error__message');
  pTextError.textContent = `${pTextError.textContent}. Текст ошибки: ${textError}`;
  body.appendChild(divErrorFromBody);

  body.addEventListener('click', deleteModalMessage);
  body.addEventListener('keydown', onPopupEscKeydown);
  const ButtonCloseError = divErrorFromBody.querySelector('.error__button');
  ButtonCloseError.addEventListener('click', deleteModalMessage);
};

const createWindowSuccess = () => {
  const divSuccessFromBody = document
    .querySelector('#success')
    .content.querySelector('.success')
    .cloneNode(true);
  body.appendChild(divSuccessFromBody);

  body.addEventListener('click', deleteModalMessage);
  body.addEventListener('keydown', onPopupEscKeydown);
};

export { createWindowError, createWindowSuccess };
