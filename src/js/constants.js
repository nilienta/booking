export const BOOKING_URL_DATA =
  'https://23.javascript.pages.academy/keksobooking/data';

export const BOOKING_URL_SEND_AD =
  'https://23.javascript.pages.academy/keksobooking';

export const URL_OPEN_STREET_MAP =
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export const POSSIBLE_FILE_TYPES_IMG = ['gif', 'jpg', 'jpeg', 'png'];

export const MAX_COUNT_PHOTO = 4;
export const TEXT_MANY_PHOTOS = `Количество загружаемых фото не может превышать ${MAX_COUNT_PHOTO} шт.`;

export const STYLE_IMG_PARAMS = {
  width: '70px',
  height: '70px',
  borderRadius: '5px',
  objectFit: 'cover',
};

export const COORDINATES_CENTER_MAP = {
  lat: 35.67,
  lng: 139.76,
};

export const INITIAL_ZOOM_MAP = 13;

export const ICON_SIZE = { iconSize: [52, 52], iconAnchor: [26, 52] };

export const AVAILABLE_TYPE = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  hotel: 'Отель',
  house: 'Дом',
  palace: 'Дворец',
};

export const PRICE_RANGE = {
  low: {
    MIN: 0,
    MAX: 10000,
  },
  middle: {
    MIN: 10001,
    MAX: 50000,
  },
  high: {
    MIN: 50001,
    MAX: 1000000,
  },
};
export const GUESTS_AMOUNT = { one: '1', two: '2', moreTwo: '0' };

export const AVAILABLE_FILTERS = {
  any: 'any',
  rooms: 'rooms',
  price: 'price',
  guests: 'guests',
};

export const MIN_TITLE_LENGTH = 30;
export const MAX_TITLE_LENGTH = 100;
export const MAX_PRICE_VALUE = 1000000;

export const ROOM_CAPACITIES = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

export const MIN_PRICES = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 10,
};
