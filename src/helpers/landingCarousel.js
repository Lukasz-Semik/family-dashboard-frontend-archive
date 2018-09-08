import { isEmpty } from 'lodash';

import {
  CONTENT_LEFT_CARD,
  CONTENT_RIGHT_CARD,
  BUTTON_LEFT_CARD,
  BUTTON_RIGHT_CARD,
  smallSizes,
  mediumSizes,
  largeSizes,
} from 'constants/landingCarousel';

export const generateSize = (item, position) => {
  if (isEmpty(position)) return smallSizes;

  const { isMovedLeft, isMovedRight } = position;

  if (item === CONTENT_LEFT_CARD) {
    if (isMovedLeft) return smallSizes;
    if (isMovedRight) return largeSizes;
    return mediumSizes;
  }

  if (item === CONTENT_RIGHT_CARD) {
    if (isMovedLeft) return largeSizes;
    if (isMovedRight) return smallSizes;
    return mediumSizes;
  }

  if (item === BUTTON_LEFT_CARD || item === BUTTON_RIGHT_CARD) {
    if (isMovedLeft || isMovedRight) return mediumSizes;
    return smallSizes;
  }

  if (isMovedLeft || isMovedRight) return mediumSizes;
  return largeSizes;
};
