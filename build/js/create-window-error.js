const createWindowError = () => {
  const divErrorFromBody = document
    .querySelector('#error')
    .content.querySelector('.error')
    .cloneNode(true);

  const mainFromBody = document.querySelector('main');
  mainFromBody.prepend(divErrorFromBody);
};

export default createWindowError;
