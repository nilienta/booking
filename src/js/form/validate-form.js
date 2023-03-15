import {
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  MAX_PRICE_VALUE,
  ROOM_CAPACITIES,
  MIN_PRICES,
} from '../constants.js';

const sectionNoticeFromBody = document.querySelector('.notice');
const inputTextTitleFromBody = document.querySelector('#title');
const inputNumberPriceFromBody = document.querySelector('#price');
const selectTypeFromBody = document.querySelector('#type');
const selectRoomsNumberFromBody = document.querySelector('#room_number');
const selectCapacityFromBody = document.querySelector('#capacity');
const inputAddressFromBody = document.querySelector('#address');
const textareaDescriptionFromBody = document.querySelector('#description');

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
    option.disabled = true;
  });

  possibleCapacities.forEach((capacity) => {
    optionsFromSelectCapacity.forEach((option) => {
      if (Number(option.value) === capacity) {
        option.disabled = false;
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
    default:
      break;
  }
};

const debounce = require('lodash/debounce');
const DEBOUNCE_INTERVAL = 500;
const debouncedHandle = debounce(onChangeHandlerNotice, DEBOUNCE_INTERVAL);

const runValidateForm = () => {
  sortCapacityPerRoomsNumber();
  sectionNoticeFromBody.addEventListener('input', debouncedHandle);
};

export default runValidateForm;
