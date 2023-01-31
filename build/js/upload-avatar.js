const uploadAvatar = () => {
  const FILE_TYPES = ["gif", "jpg", "jpeg", "png"];
  const buttonFileLoader = document.querySelector(".ad-form-header__input");
  const previewAvatar = document.querySelector(".ad-form-header__preview img");

  buttonFileLoader.addEventListener("change", () => {
    const file = buttonFileLoader.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });
    if (matches) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        previewAvatar.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  });
};

export default uploadAvatar;
