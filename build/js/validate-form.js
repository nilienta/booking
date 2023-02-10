const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;

const ROOM_CAPACITIES = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const MIN_PRICES = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 10,
};

const sectionNoticeFromBody = document.querySelector('.notice');
const inputTextTitleFromBody = document.querySelector('#title');
const inputNumberPriceFromBody = document.querySelector('#price');
const selectTypeFromBody = document.querySelector('#type');
const selectRoomsNumberFromBody = document.querySelector('#room_number');
const selectCapacityFromBody = document.querySelector('#capacity');
const inputAddressFromBody = document.querySelector('#address');
const textareaDescriptionFromBody = document.querySelector('#description');
const inputFileFromBodyImg = document.querySelector('#images');

const validateLengthTextTitle = () => {
  const lengthTextTitle = inputTextTitleFromBody.value.length;
  const displayValidityText = {
    manySymbol() {
      inputTextTitleFromBody.setCustomValidity(
        `Удалите лишнее ${lengthTextTitle - MAX_TITLE_LENGTH} симв.`
      );
    },
    fewSymbol() {
      inputTextTitleFromBody.setCustomValidity(
        `Ещё ${MIN_TITLE_LENGTH - lengthTextTitle} симв.`
      );
    },
  };

  if (lengthTextTitle < MIN_TITLE_LENGTH) {
    displayValidityText.fewSymbol();
  } else if (lengthTextTitle > MAX_TITLE_LENGTH) {
    displayValidityText.manySymbol();
  } else {
    inputTextTitleFromBody.setCustomValidity('');
  }
  inputTextTitleFromBody.reportValidity();
};

const validateValuePrice = () => {
  const minPriceForSelectType = MIN_PRICES[selectTypeFromBody.value];
  const displayValidityText = {
    maxPrice() {
      inputNumberPriceFromBody.setCustomValidity(
        `Максимальная цена ${MAX_PRICE_VALUE} деревянных`
      );
    },
    minPrice() {
      inputNumberPriceFromBody.setCustomValidity(
        `Минимальная цена ${minPriceForSelectType} деревянных`
      );
    },
  };

  const valuePrice = inputNumberPriceFromBody.value;
  if (valuePrice > MAX_PRICE_VALUE) {
    displayValidityText.maxPrice();
  } else if (valuePrice < minPriceForSelectType) {
    displayValidityText.minPrice();
  } else {
    inputNumberPriceFromBody.setCustomValidity('');
  }
  inputNumberPriceFromBody.reportValidity();
};

const validateCoordinates = () => {
  const coordinates = inputAddressFromBody.value;
  const regex =
    /^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?),(\s|)(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$/;
  const valid = regex.test(coordinates);
  inputAddressFromBody.setCustomValidity(
    valid ? '' : 'Не верный формат координат'
  );
  inputAddressFromBody.reportValidity();
};

const sortCapacityPerRoomsNumber = () => {
  const optionsFromSelectCapacity =
    selectCapacityFromBody.querySelectorAll('option');
  const currentRoomsNumber = Number(selectRoomsNumberFromBody.value);
  const possibleCapacities = ROOM_CAPACITIES[currentRoomsNumber];

  optionsFromSelectCapacity.forEach((option) => {
    option.enable = false;
  });

  possibleCapacities.forEach((capacity) => {
    optionsFromSelectCapacity.forEach((option) => {
      if (Number(option.value) === capacity) {
        option.enable = true;
      }
    });

    const hasPossibleCapacitySelectValue = possibleCapacities.includes(
      Number(selectCapacityFromBody.value)
    );
    if (!hasPossibleCapacitySelectValue) {
      const maxPossibleCapacity =
        possibleCapacities[possibleCapacities.length - 1];
      selectCapacityFromBody.value = maxPossibleCapacity;
    }
  });
};

const validateLengthDescription = () => {
  const descriptionLength = textareaDescriptionFromBody.value.length;
  textareaDescriptionFromBody.setCustomValidity(
    descriptionLength > 10 ? '' : 'Описание слишком короткое'
  );
  textareaDescriptionFromBody.reportValidity();
};

// FIXME теряет имя, либо происходит дублирование картинок
const validateLoadPhoto = () => {
  const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  const imgPreviewAvatarFromBody = document.querySelector('.ad-form__photo');
  imgPreviewAvatarFromBody.style = 'display: flex;gap: 5px;';
  //   const countPhoto = Array.from(
  //     imgPreviewAvatarFromBody.querySelectorAll('img'),
  //   ).length;
  //   console.log(countPhoto);

  const createImgForPhoto = (fileReader) => {
    const previewPhoto = document.createElement('img');
    previewPhoto.height = '70';
    previewPhoto.src = fileReader.result;
    imgPreviewAvatarFromBody.appendChild(previewPhoto);
  };

  inputFileFromBodyImg.addEventListener('change', () => {
    const fileAvatar = inputFileFromBodyImg.files[0];
    const nameFileAvatar = fileAvatar.name.toLowerCase();

    const isFormatFileCorrect = FILE_TYPES.some((item) =>
      nameFileAvatar.endsWith(item)
    );

    if (isFormatFileCorrect) {
      const fileReader = new FileReader();

      fileReader.addEventListener('load', () => {
        createImgForPhoto(fileReader);
      });
      fileReader.readAsDataURL(fileAvatar);
      fileReader.addEventListener('error', () => {
        // TODO добавить обработку ошибки
        //   console.error('Произошла ошибка при чтении файла');
      });
    }
    inputFileFromBodyImg.value = '';
  });
};

const onChangeHandlerNotice = (evt) => {
  switch (evt.target) {
    case inputTextTitleFromBody:
      validateLengthTextTitle();
      break;
    case inputNumberPriceFromBody:
      validateValuePrice();
      break;
    case selectRoomsNumberFromBody:
      sortCapacityPerRoomsNumber();
      break;
    case inputAddressFromBody:
      validateCoordinates();
      break;
    case textareaDescriptionFromBody:
      validateLengthDescription();
      break;
    case inputFileFromBodyImg:
      validateLoadPhoto();
      break;
    default:
      break;
  }
};

const runValidateForm = () => {
  sortCapacityPerRoomsNumber();
  sectionNoticeFromBody.addEventListener('input', onChangeHandlerNotice);
};

export default runValidateForm;
