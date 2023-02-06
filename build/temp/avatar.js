import { getRandomElementRange } from "./utils.js";

const createAvatars = [];
for (let i = 1; i <= 8; i += 1) {
  createAvatars[i] = "0" + i;
}

const getSrcAvatar = () => {
  const numberUserIndex = getRandomElementRange(0, createAvatars.length - 1, 0);
  const numberUser = createAvatars.splice(numberUserIndex, 1)[0];
  if (numberUser === undefined) {
    return "img/avatars/default.png";
  }
  return `img/avatars/user${numberUser}.png`;
};

export default getSrcAvatar;
