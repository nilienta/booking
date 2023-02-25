const IMG_PARAMS = {
  WIDTH: '70px',
  HEIGHT: '70px',
  BORDER_RADIUS: '5px',
  OBJECT_FIT: 'cover',
};

const setImgPreviewStyles = (img) => {
  img.style.width = IMG_PARAMS.WIDTH;
  img.style.height = IMG_PARAMS.HEIGHT;
  img.style.borderRadius = IMG_PARAMS.BORDER_RADIUS;
  img.style.objectFit = IMG_PARAMS.OBJECT_FIT;
};
export default setImgPreviewStyles;
