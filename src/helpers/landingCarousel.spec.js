import {
  CONTENT_LEFT_CARD,
  CONTENT_RIGHT_CARD,
  BUTTON_LEFT_CARD,
  BUTTON_RIGHT_CARD,
  smallSizes,
  mediumSizes,
  largeSizes,
} from 'constants/landingCarousel';

import { generateSize } from './landingCarousel';

describe('generateSize()', () => {
  it('should return deafult values if invoked without args', () => {
    expect(generateSize()).toEqual(smallSizes);
  });

  it(`should return proper sizes for ${CONTENT_LEFT_CARD}`, () => {
    expect(generateSize(CONTENT_LEFT_CARD, { isMovedLeft: false, isMovedRight: false })).toEqual(
      mediumSizes
    );
    expect(generateSize(CONTENT_LEFT_CARD, { isMovedLeft: true })).toEqual(smallSizes);
    expect(generateSize(CONTENT_LEFT_CARD, { isMovedRight: true })).toEqual(largeSizes);
  });

  it(`should return proper sizes for ${CONTENT_RIGHT_CARD}`, () => {
    expect(generateSize(CONTENT_RIGHT_CARD, { isMovedLeft: false, isMovedRight: false })).toEqual(
      mediumSizes
    );
    expect(generateSize(CONTENT_RIGHT_CARD, { isMovedLeft: true })).toEqual(largeSizes);
    expect(generateSize(CONTENT_RIGHT_CARD, { isMovedRight: true })).toEqual(smallSizes);
  });

  it(`should return proper sizes for ${BUTTON_LEFT_CARD}`, () => {
    expect(generateSize(BUTTON_LEFT_CARD, { isMovedLeft: false, isMovedRight: false })).toEqual(
      smallSizes
    );
    expect(generateSize(BUTTON_LEFT_CARD, { isMovedLeft: true })).toEqual(mediumSizes);
    expect(generateSize(BUTTON_LEFT_CARD, { isMovedRight: true })).toEqual(mediumSizes);
  });

  it(`should return proper sizes for ${BUTTON_RIGHT_CARD}`, () => {
    expect(generateSize(BUTTON_RIGHT_CARD, { isMovedLeft: false, isMovedRight: false })).toEqual(
      smallSizes
    );
    expect(generateSize(BUTTON_RIGHT_CARD, { isMovedLeft: true })).toEqual(mediumSizes);
    expect(generateSize(BUTTON_RIGHT_CARD, { isMovedRight: true })).toEqual(mediumSizes);
  });
});
