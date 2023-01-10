const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;

const RoomCapacities = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const MinPrices = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 10,
};

const form = document.querySelector(".notice");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const type = document.querySelector("#type");
const roomsNumberSelect = document.querySelector("#room_number");
const capacitySelect = document.querySelector("#capacity");

const validateTitle = () => {
  const valueLength = title.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity(
      `Удалите лишнее ${valueLength - MAX_TITLE_LENGTH} симв.`
    );
  } else {
    title.setCustomValidity("");
  }

  title.reportValidity();
};

const validatePrice = () => {
  const minPrice = MinPrices[type.value];
  const valueLength = price.value;
  if (valueLength > MAX_PRICE_VALUE) {
    price.setCustomValidity(`Максимальная цена ${MAX_PRICE_VALUE} деревянных`);
  } else if (valueLength < minPrice) {
    price.setCustomValidity(`Минимальная цена ${minPrice} деревянных`);
  } else {
    price.setCustomValidity("");
  }

  price.reportValidity();
};

const onRoomsNumberSelect = () => {
  const seatingCapacityOptions = capacitySelect.querySelectorAll("option");
  const roomsNumber = Number(roomsNumberSelect.value);
  const possibleCapacities = RoomCapacities[roomsNumber];

  seatingCapacityOptions.forEach((option) => {
    option.disabled = true;
  });

  possibleCapacities.forEach((seatsAmount) => {
    seatingCapacityOptions.forEach((option) => {
      if (Number(option.value) === seatsAmount) {
        option.disabled = false;
      }
    });
    if (!possibleCapacities.includes(Number(capacitySelect.value))) {
      const maxCapacity = possibleCapacities[possibleCapacities.length - 1];
      capacitySelect.value = maxCapacity;
    }
  });
};

const onChangeHandlerForm = (evt) => {
  switch (evt.target) {
    case title:
      validateTitle();
      break;
    case price:
      validatePrice();
      break;
    case roomsNumberSelect:
      onRoomsNumberSelect();
      break;
  }
};

onRoomsNumberSelect();
form.addEventListener("input", onChangeHandlerForm);
