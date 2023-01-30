export const createWindowError = () => {
  const divError = document
    .querySelector("#error")
    .content.querySelector(".error")
    .cloneNode(true);

  const elementMain = document.querySelector("main");
  elementMain.prepend(divError);
};
