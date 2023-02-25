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

const createModalMessage = (idTemplate, textMessage = '') => {
  const divMessageFromBody = document
    .querySelector(`#${idTemplate}`)
    .content.querySelector(`.${idTemplate}`)
    .cloneNode(true);

  if (textMessage) {
    const pTextMessage = divMessageFromBody.querySelector('.error__message');
    pTextMessage.textContent = `${pTextMessage.textContent}. ${textMessage}`;
  }

  body.appendChild(divMessageFromBody);

  body.addEventListener('click', deleteModalMessage);
  body.addEventListener('keydown', deleteModalMessage);

  if (idTemplate === 'error') {
    const ButtonCloseError = divMessageFromBody.querySelector('.error__button');
    ButtonCloseError.addEventListener('click', deleteModalMessage);
  }
};

const createModalError = (textError) => {
  createModalMessage('error', `Текст ошибки: ${textError}`);
};

const createModalSuccess = () => {
  createModalMessage('success');
};

export { createModalError, createModalSuccess };
