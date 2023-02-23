const body = document.querySelector('body');

const removeElementMessage = () => {
  const divSuccess = document.querySelector('.success');
  const divError = document.querySelector('.error');
  divSuccess?.remove();
  divError?.remove();
};

const deleteModalMessage = (evt) => {
  const isEscEvent = () => evt.key === 'Escape' || evt.key === 'Esc';
  if (isEscEvent || evt.type === 'click') removeElementMessage();
  body.removeEventListener('click', deleteModalMessage);
  body.removeEventListener('keydown', deleteModalMessage);
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
  body.addEventListener('keydown', deleteModalMessage);
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
  body.addEventListener('keydown', deleteModalMessage);
};

export { createWindowError, createWindowSuccess };
