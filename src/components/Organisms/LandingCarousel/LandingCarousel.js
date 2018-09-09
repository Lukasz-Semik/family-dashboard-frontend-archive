import React from 'react';

import {
  CONTENT_LEFT_CARD,
  CONTENT_RIGHT_CARD,
  CONTENT_CENTER_CARD,
  BUTTON_LEFT_CARD,
  BUTTON_RIGHT_CARD,
} from 'constants/landingCarousel';
import { Column, Row } from 'components/Atoms/Grid/Grid';

import LandingCarouselContainer from './LandingCarouselContainer';
import { MainWrapper, FlyingWrapper } from './components/styled';
import LandingTitle from './components/LandingTitle/LandingTitle';
import LandingElement from './components/LandingElement/LandingElement';
import LandingButton from './components/LandingButton/LandingButton';

const LandingCarousel = ({ isMovedRight, isMovedLeft, moveRight, moveLeft, moveCenter }) => {
  const currentPosition = { isMovedRight, isMovedLeft };

  return (
    <div>
      <LandingTitle {...currentPosition} />

      <MainWrapper>
        <FlyingWrapper isMovedRight={isMovedRight} isMovedLeft={isMovedLeft}>
          <LandingButton
            onClick={moveLeft}
            currentPosition={currentPosition}
            elementName={BUTTON_LEFT_CARD}
            translationPath="landing.titles.signUp"
          />

          <Row>
            <Column isOneThird>
              <LandingElement
                onClick={moveRight}
                elementName={CONTENT_LEFT_CARD}
                currentPosition={currentPosition}
                buttonTranslationPath="landing.titles.welcome"
              >
                <div>WELCOME CARD</div>
              </LandingElement>
            </Column>

            <Column isOneThird>
              <LandingElement
                onClick={moveCenter}
                elementName={CONTENT_CENTER_CARD}
                currentPosition={currentPosition}
                buttonTranslationPath="landing.titles.signIn"
              >
                <div>SIGN IN CARD</div>
              </LandingElement>
            </Column>

            <Column isOneThird>
              <LandingElement
                onClick={moveLeft}
                elementName={CONTENT_RIGHT_CARD}
                currentPosition={currentPosition}
                buttonTranslationPath="landing.titles.signUp"
              >
                <div>SIGN UP CARD</div>
              </LandingElement>
            </Column>
          </Row>

          <LandingButton
            onClick={moveRight}
            currentPosition={currentPosition}
            elementName={BUTTON_RIGHT_CARD}
            translationPath="landing.titles.welcome"
            isRightButton
          />
        </FlyingWrapper>
      </MainWrapper>
    </div>
  );
};

export { LandingCarousel as LandingCarouselUnwrapped };

const render = containerProps => <LandingCarousel {...containerProps} />;
export default props => <LandingCarouselContainer render={render} {...props} />;
