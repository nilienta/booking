const adForm = document.querySelector('.ad-form');

export const resetDivPhoto = () => {
  const divPhotoFromBody = Array.from(
    document.querySelectorAll('.ad-form__photo')
  );
  divPhotoFromBody?.forEach((div) => {
    div.remove();
  });

  const divEmptyFromBody = document.querySelector('.ad-form__photo--empty');
  divEmptyFromBody.style.display = '';
};
const resetPhoto = () => {
  const InputPhotoFromBody = document.querySelector('#images');
  InputPhotoFromBody.value = '';
  resetDivPhoto();
};

export const resetForm = () => {
  resetPhoto();
  adForm.reset();
};

export const onFormReset = () => {
  adForm.addEventListener('reset', resetForm);
};
