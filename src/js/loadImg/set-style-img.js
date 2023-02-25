import { STYLE_IMG_PARAMS } from '../constants.js';

const setImgPreviewStyles = (img) => {
  img.style.width = STYLE_IMG_PARAMS.WIDTH;
  img.style.height = STYLE_IMG_PARAMS.HEIGHT;
  img.style.borderRadius = STYLE_IMG_PARAMS.BORDER_RADIUS;
  img.style.objectFit = STYLE_IMG_PARAMS.OBJECT_FIT;
};
export default setImgPreviewStyles;
