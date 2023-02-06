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

const sectionNoticeFromBody = document.querySelector(".notice");
const inputTextTitleFromBody = document.querySelector("#title");
const inputNumberPriceFromBody = document.querySelector("#price");
const selectTypeFromBody = document.querySelector("#type");
const selectRoomsNumberFromBody = document.querySelector("#room_number");
const selectCapacityFromBody = document.querySelector("#capacity");

const validateLengthTextTitle = () => {
  const lengthTextTitle = inputTextTitleFromBody.value.length;
  // TODO оптимизировать код
  if (lengthTextTitle < MIN_TITLE_LENGTH) {
    inputTextTitleFromBody.setCustomValidity(
      `Ещё ${MIN_TITLE_LENGTH - lengthTextTitle} симв.`
    );
  } else if (lengthTextTitle > MAX_TITLE_LENGTH) {
    inputTextTitleFromBody.setCustomValidity(
      `Удалите лишнее ${lengthTextTitle - MAX_TITLE_LENGTH} симв.`
    );
  } else {
    inputTextTitleFromBody.setCustomValidity("");
  }

  inputTextTitleFromBody.reportValidity();
};

const validateValuePrice = () => {
  // TODO оптимизировать код
  // TODO Добавить подписку на изменение типа дома
  const minPriceForSelectType = MIN_PRICES[selectTypeFromBody.value];
  const valuePrice = inputNumberPriceFromBody.value;
  if (valuePrice > MAX_PRICE_VALUE) {
    price.setCustomValidity(`Максимальная цена ${MAX_PRICE_VALUE} деревянных`);
  } else if (valuePrice < minPriceForSelectType) {
    price.setCustomValidity(
      `Минимальная цена ${minPriceForSelectType} деревянных`
    );
  } else {
    inputNumberPriceFromBody.setCustomValidity("");
  }

  inputNumberPriceFromBody.reportValidity();
};

const sortCapacityPerRoomsNumber = () => {
  const optionsFromSelectCapacity =
    selectCapacityFromBody.querySelectorAll("option");
  const currentRoomsNumber = Number(selectRoomsNumberFromBody.value);
  const possibleCapacities = ROOM_CAPACITIES[currentRoomsNumber];

  optionsFromSelectCapacity.forEach((option) => {
    option.disabled = true;
  });
  // TODO оптимизировать
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
  }
};

sortCapacityPerRoomsNumber();
sectionNoticeFromBody.addEventListener("input", onChangeHandlerNotice);
