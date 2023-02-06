const uploadAvatar = () => {
  const FILE_TYPES = ["gif", "jpg", "jpeg", "png"];
  const inputFileAvatarFromBody = document.querySelector("#avatar");
  const imgPreviewAvatarFromBody = document
    .querySelector("#avatar-preview")
    .querySelector("img");

  inputFileAvatarFromBody.addEventListener("change", () => {
    const fileAvatar = inputFileAvatarFromBody.files[0];
    const nameFileAvatar = fileAvatar.name.toLowerCase();

    const isFormatFileCorrect = FILE_TYPES.some((item) =>
      nameFileAvatar.endsWith(item)
    );
    if (isFormatFileCorrect) {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        imgPreviewAvatarFromBody.src = fileReader.result;
      });
      fileReader.readAsDataURL(fileAvatar);
    }
  });
};

export default uploadAvatar;
