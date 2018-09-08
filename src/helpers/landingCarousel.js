import { isEmpty } from 'lodash';

import {
  CONTENT_LEFT_CARD,
  CONTENT_RIGHT_CARD,
  BUTTON_LEFT_CARD,
  BUTTON_RIGHT_CARD,
} from 'constants/landingCarousel';

export const generateSize = (item, position) => {
  const smallSizes = { width: 100, height: 100 };
  if (isEmpty(position)) return smallSizes;

  const mediumSizes = { width: 300, height: 300 };
  const largeSizes = { width: 450, height: 400 };

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
