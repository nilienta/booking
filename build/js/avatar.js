import { getRandomElementRange } from "./utils.js";

const createArrAvatar = [];
for (let i = 1; i <= 8; i += 1) {
  createArrAvatar[i] = "0" + i;
}

export const getSrcAvatar = () => {
  const numberUserIndex = getRandomElementRange(
    0,
    createArrAvatar.length - 1,
    0
  );
  const numberUser = createArrAvatar.splice(numberUserIndex, 1)[0];
  if (numberUser === undefined) {
    return "img/avatars/default.png";
  }
  return `img/avatars/user${numberUser}.png`;
};
