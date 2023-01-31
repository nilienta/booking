const uploadAvatar = () => {
  const FILE_TYPES = ["gif", "jpg", "jpeg", "png"];
  const buttonFileLoader = document.querySelector("#avatar");
  const previewAvatar = document.querySelector("#avatar-preview");

  buttonFileLoader.addEventListener("change", () => {
    const file = buttonFileLoader.files[0];
    const fileName = file.name.toLowerCase();

    const formatCorresponds = FILE_TYPES.some((item) =>
      fileName.endsWith(item)
    );
    if (formatCorresponds) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        previewAvatar.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  });
};

export default uploadAvatar;
